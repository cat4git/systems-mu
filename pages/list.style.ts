
import { makeStyles } from '@material-ui/core/styles';

export const listStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 400,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    li:{},
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
     
    },
    parent:{
        color: "#51E2F5",
       
    },
    chuldren:{
        color:"#90ee90"
    },
    
  }));