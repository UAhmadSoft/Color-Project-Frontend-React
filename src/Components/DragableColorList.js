import React from 'react';
import DragableColorBox from './DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DragableColorList = SortableContainer((props) => {
   const { removeBox, colors, appBarHeight } = props;

   const deleteColor = (colorName) => {
      removeBox(colorName);
   };

   return (
      <div style={{ height: '25%', width: '100%', marginTop: appBarHeight }}>
         {colors.map((color, i) => (
            <DragableColorBox
               index={i}
               color={color.color}
               name={color.name}
               removeBox={deleteColor}
               key={color.name}
            />
         ))}
      </div>
   );
});

export default DragableColorList;
