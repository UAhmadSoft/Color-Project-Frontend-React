import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
   const { classes, paletteName, emoji, colors } = props;
   const miniColorBoxes = colors.map((color) => (
      <div
         className={classes.miniColor}
         style={{ backgroundColor: color.color }}
         key={color.name}
      ></div>
   ));

   function handleClick() {
      props.handleClick(props.id);
   }
   return (
      <div className={classes.root} onClick={handleClick}>
         <div className={classes.colors}>{miniColorBoxes}</div>
         <h5 className={classes.title}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
         </h5>
      </div>
   );
}

export default withStyles(styles)(MiniPalette);
