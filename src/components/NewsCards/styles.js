import {makeStyles} from '@material-ui/core/styles';
 

export default makeStyles(
    {
        container: {
            padding: '0 5%',
            width: '100%',
            margin: 0,
        },

        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-between',
            alignItems: 'center',
            width: '100%',
            height: '45vh', 
            padding: '15%',
            borderRadius: 10,
            color: 'white',
            boxShadow: '5px 10px 8px #888888'
        },

        infoCard: {
            display: 'flex',
           flexDirection: 'column',
           textAlign: 'center',
        }


    }
);

