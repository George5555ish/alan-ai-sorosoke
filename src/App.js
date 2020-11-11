import React, { useState, useEffect } from 'react';
import NewsCards from './components/NewsCards/NewsCards';

import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

const alanKey = '242f0171c5303c22e6ae8cd510ade2bc2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    const classes = useStyles();
    
    const [newsArticles, setNewsArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState(-1);
    useEffect(() => {

        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number}) => {
                if (command === 'newHeadlines'){
                 
                    setNewsArticles(articles);
                    setCurrentArticle(-1);
                } else if(command === 'highlight'){
                        setCurrentArticle((prev) => prev + 1);
                } else if (command === 'open'){

                        const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: 'true'}) : number;
                        
                        const article = articles[parsedNumber - 1];

                        if (parsedNumber > articles.length) {
                            alanBtn().playText('Please try that again...');
                          } else if (article) {
                            window.open(article.url, '_blank');
                            alanBtn().playText('Opening...');
                          } else {
                            alanBtn().playText('Please try that again...');
                          }
                        
                }
            } 

        });
    }, []);
    return(
        <div>
            <div className={classes.logoContainer}>
                <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt="Alan Logo"/>
            </div>
            <NewsCards articles={newsArticles} currentArticle={currentArticle}/>
        </div>
    );
}

export default App;