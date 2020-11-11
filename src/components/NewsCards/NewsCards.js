import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles.js";

const infoCards = [
 
  {
    color: "#4527a0",
    title: "News by Terms (SoroSoke Enabled)",
    info: "Bitcoin, PlayStation 5, Buhari, Donald Trump...",
    text: "Tell me about Buhari or SoroSoke Buhari",
  }, 
  
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];
const NewsCards = ({ articles, currentArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard,i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} key={i}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">You can say: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }} key={i}>
              <NewsCard article={article} i={i} currentArticle={currentArticle}/>
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default NewsCards;