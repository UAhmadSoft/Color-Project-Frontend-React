import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles/MiniPaletteStyles';

const MiniPalette = React.memo((props) => {
   const { classes, paletteName, emoji, colors } = props;

   React.useEffect(() => {
      // console.log('rendered', paletteName);
   });

   React.useEffect(() => {
      // console.log('rerenderd due to change of props', paletteName);
   }, [classes, paletteName, emoji, colors]);

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

   function deletePalette(e) {
      e.stopPropagation();
      props.deletePalette(props.id);
   }

   function editPalette(e) {
      e.stopPropagation();
      props.editPalette(props.id);
   }

   return (
      <div className={classes.root} onClick={handleClick}>
         <div className={classes.Icons}>
            <span className={classes.DeleteIcon} onClick={deletePalette}>
               <DeleteIcon
                  style={{ fontSize: '2em', paddingTop: '5px' }}
               ></DeleteIcon>
            </span>
            <span className={classes.EditIcon} onClick={editPalette}>
               <EditIcon
                  style={{ fontSize: '2em', paddingTop: '5px' }}
               ></EditIcon>
            </span>
         </div>
         <div className={classes.colors}>{miniColorBoxes}</div>
         <h5 className={classes.title}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
         </h5>
      </div>
   );
});

export default withStyles(styles)(MiniPalette);
