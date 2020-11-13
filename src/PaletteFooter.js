import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = {
   paletteFooter: {
      backgroundColor: '#fff',
      height: '5vh',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontWeight: 'bold',
   },
   emoji: {
      fontSize: '1.5rem',
      margin: '0 1rem',
   },
};

function PaletteFooter(props) {
   const { paletteName, emoji, classes } = props;
   return (
      <footer className={classes.paletteFooter}>
         {paletteName}
         <span className={classes.emoji} style={{ padding: '10px' }}>
            {emoji}
         </span>
      </footer>
   );
}
export default withStyles(styles)(PaletteFooter);
