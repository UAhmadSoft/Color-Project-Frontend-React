import DeleteIcon from '@material-ui/icons/Delete';

import { withStyles } from '@material-ui/styles';
import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import styles from './styles/DragableColorBoxStyles';

const DragableColorBox = SortableElement((props) => {
   const { classes, name, color, removeBox } = props;

   const deleteColor = () => {
      removeBox(name);
   };
   return (
      <div className={classes.root} style={{ backgroundColor: color }}>
         <div className={classes.boxContent}>
            <span>{name}</span>
            <DeleteIcon
               onClick={deleteColor}
               className={classes.deleteIcon}
            ></DeleteIcon>
         </div>
      </div>
   );
});

export default withStyles(styles)(DragableColorBox);
