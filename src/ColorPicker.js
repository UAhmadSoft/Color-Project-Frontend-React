import AddIcon from '@material-ui/icons/Add';

import { Button } from '@material-ui/core';
import React from 'react';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import chroma from 'chroma-js';

import useStyles from './styles/ColorPickerStyles';

export default function ColorPicker(props) {
   const {
      handleChangeComplete,
      colors,
      paletteFull,
      addColor,
      currentColor,
   } = props;

   //    const [currentColor, setCurrentColor] = React.useState('#FB0BEB');

   const classes = useStyles();

   const [newColorName, setnewColorName] = React.useState('');

   React.useEffect(() => {
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
         let isUnique = true;
         colors.forEach((color) => {
            if (color.name.toLowerCase() === value.toLowerCase())
               isUnique = false;
         });

         // colors.every(({name}) => name.toLowerCase() !== value.toLowerCase() )

         // console.log('returning ', isUnique);
         return isUnique;
      });
      ValidatorForm.addValidationRule('isColorUnique', () => {
         let isUnique = true;
         colors.forEach((color) => {
            // console.clear();
            // console.log('current color is', currentColor);
            if (color.color === currentColor) isUnique = false;
         });

         // colors.every(({name}) => name.toLowerCase() !== value.toLowerCase() )

         // console.log('returning ', isUnique);
         return isUnique;
      });
      ValidatorForm.addValidationRule('isPaletteFull', () => {
         return !paletteFull;
      });
   });

   const onSubmit = () => {
      addColor({ currentColor: currentColor, newColorName: newColorName });

      setnewColorName('');
   };
   const handleChange = (e) => {
      setnewColorName(e.target.value);
   };

   const colorRecommended =
      chroma(currentColor).luminance() >= 0.5 ? 'rgba(0,0,0,0.7)' : 'white';
   const borderRecommended =
      chroma(currentColor).luminance() >= 0.5 ? '1px solid black' : 'none';

   return (
      <div className={classes.root}>
         <ChromePicker
            className={classes.picker}
            color={currentColor}
            onChangeComplete={(color) => handleChangeComplete(color)}
         />
         <ValidatorForm onSubmit={onSubmit} style={{ marginTop: '10px' }}>
            <TextValidator
               value={newColorName}
               onChange={handleChange}
               placeholder='Color Name'
               className={classes.colorNameInput}
               validators={[
                  'required',
                  'isColorNameUnique',
                  'isColorUnique',
                  'isPaletteFull',
               ]}
               errorMessages={[
                  'Plz enter Color Name',
                  'Color Name already exists !',
                  'Color already exists !',
                  'Palette is Full !',
               ]}
               disabled={paletteFull}
            />
            <span
               className={paletteFull && classes.disabled}
               style={{ display: 'block', marginTop: '1rem' }}
            >
               <Button
                  // onClick={addnewColorName}
                  variant='contained'
                  className={classes.addNewButton}
                  type='submit'
                  style={{
                     color: colorRecommended,
                     backgroundColor: currentColor,
                     border: borderRecommended,
                  }}
                  disabled={paletteFull}
               >
                  <AddIcon
                     style={{
                        marginRight: '35px',
                        fontSize: '1.5em',
                     }}
                  />
                  Add Color
               </Button>
            </span>
         </ValidatorForm>
      </div>
   );
}
