import PaletteIcon from '@material-ui/icons/Palette';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { DialogContentText } from '@material-ui/core';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import useStyles from './styles/PaletteMetaFormStyles';

export default function PaletteMetaForm(props) {
   const [open, setOpen] = React.useState(false);
   const [emojiPicker, setemojiPickerOpen] = React.useState(false);

   const {
      palettes,
      addOrUpdatePalette,
      colorsTotal,
      updatePalette,
      currentPalette,
   } = props;

   const [newPaletteName, setnewPaletteName] = React.useState('');

   const classes = useStyles();
   React.useEffect(() => {
      ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
         let isUnique = true;
         palettes.forEach((currentPalette) => {
            if (
               currentPalette.paletteName.toLowerCase() ===
               newPaletteName.toLowerCase()
            )
               isUnique = false;
         });

         return isUnique;
      });
      ValidatorForm.addValidationRule('isPaletteEmpty', () => {
         return colorsTotal !== 0;
      });
   }, [colorsTotal, newPaletteName, palettes]);
   React.useEffect(() => {
      // console.log('current', currentPalette);
      if (updatePalette && currentPalette) {
         setnewPaletteName(currentPalette.paletteName);
      }
   }, [currentPalette, updatePalette]);

   const changeNewPaletteName = (e) => {
      setnewPaletteName(e.target.value);
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const saveOrUpdatePalette = (emoji) => {
      setemojiPickerOpen(false);

      if (updatePalette) {
         addOrUpdatePalette(newPaletteName, emoji.native, true);
      } else {
         addOrUpdatePalette(newPaletteName, emoji.native, false);
      }
      window.history.back();
   };

   const handleClose = () => {
      setOpen(false);
   };
   const handleEmojiPickerClose = () => {
      setemojiPickerOpen(false);
   };
   // () => createPalette(newPaletteName);
   return (
      <div>
         <Dialog
            open={emojiPicker}
            onClose={handleEmojiPickerClose}
            aria-labelledby='emojiDialog'
         >
            <DialogTitle
               id='emojiDialog'
               style={{
                  borderBottom: '1px solid rgba(0,0,0,0.6)',
               }}
               className={classes.DialogTitle}
            >
               Pick a Palette Emoji !
            </DialogTitle>
            <Picker
               className={classes.myEmojiPicker}
               set='apple'
               title='Pick A Palette Emoji !'
               emoji='point_up'
               onSelect={saveOrUpdatePalette}
               // style={{ position: 'absolute', bottom: '20px', right: '20px' }}
            />

            {/* <Picker
               i18n={{
                  search: 'Recherche',
                  categories: {
                     search: 'Résultats de recherche',
                     recent: 'Récents',
                  },
               }}
            /> */}
         </Dialog>
         <Button
            // type='submit'
            variant='contained'
            color='primary'
            style={{ cursor: 'pointer' }}
            onClick={handleClickOpen}
         >
            <PaletteIcon style={{ marginRight: '10px' }} />
            {updatePalette ? 'Update Palette' : 'Save Palette'}
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
         >
            <DialogTitle
               id='form-dialog-title'
               style={{
                  borderBottom: '1px solid rgba(0,0,0,0.6)',
               }}
               className={classes.DialogTitle}
            >
               {updatePalette ? 'Update Palette' : 'Save Palette'}
            </DialogTitle>
            <DialogContent className={classes.DialogContent}>
               <DialogContentText
                  style={{
                     fontFamily: 'sans-serif',
                     fontSize: '1.1rem',
                     color: 'black',
                  }}
               >
                  Please enter a palette name. It must be unique ;
               </DialogContentText>
               <ValidatorForm
                  onSubmit={() => {
                     handleClose();
                     setemojiPickerOpen(true);
                  }}
                  className={classes.formValidator}
               >
                  <TextValidator
                     value={newPaletteName}
                     label='Palette Name'
                     // style={{ width: '100%' }}
                     fullWidth
                     onChange={changeNewPaletteName}
                     validators={[
                        'required',
                        'isPaletteNameUnique',
                        'matchRegexp:^[a-zA-Z0-9 ]*$',
                        'isPaletteEmpty',
                        // 'isColorUnique',
                     ]}
                     errorMessages={[
                        'Plz enter Palete Name ',
                        'Palette Name already exists !',
                        'Name Contains no special characters !',
                        'Palette Must NOT be empty',
                        // 'Color already exists !',
                     ]}
                  />
               </ValidatorForm>
            </DialogContent>
            <DialogActions className={classes.DialogActions}>
               <Button
                  onClick={handleClose}
                  color='secondary'
                  variant='contained'
               >
                  Cancel
               </Button>
               <Button
                  onClick={() => {
                     handleClose();
                     setemojiPickerOpen(true);
                  }}
                  color='primary'
                  variant='contained'
                  style={{ cursor: 'pointer' }}
               >
                  {updatePalette ? 'Update Palette' : 'Save Palette'}
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
