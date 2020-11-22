import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';
import DeletePaletteConfirm from './DeletePaletteConfirm';

function MiniPalette(props) {
   const { classes, paletteName, emoji, colors } = props;
   const [confirmBox, setConfirmBox] = React.useState(false);
   const miniColorBoxes = colors.map((color) => (
      <div
         className={classes.miniColor}
         style={{ backgroundColor: color.color }}
         key={color.name}
      ></div>
   ));

   function handleClick() {
      console.log('handleClick of Minipalette');
      props.handleClick(props.id);
   }
   function deletePalette(e) {
      // e.stopPropagation();
      props.deletePalette(props.id);
   }
   function confirmDelete(e) {
      e.stopPropagation();
      console.log('opening');
      setConfirmBox(true);
   }
   return (
      <div className={classes.root} onClick={handleClick}>
         <span className={classes.DeleteIcon} onClick={confirmDelete}>
            <DeleteIcon
               style={{ fontSize: '2em', paddingTop: '5px' }}
            ></DeleteIcon>
         </span>
         <div className={classes.colors}>{miniColorBoxes}</div>
         <h5 className={classes.title}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
         </h5>
         <DeletePaletteConfirm isOpen={confirmBox} />
      </div>
   );
}

export default withStyles(styles)(MiniPalette);
