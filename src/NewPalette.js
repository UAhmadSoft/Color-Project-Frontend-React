import BackspaceIcon from '@material-ui/icons/Backspace';

import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import DragableColorList from './DragableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewPaletteNav from './NewPaletteNav';
import ColorPicker from './ColorPicker';

import SeedColors from './seedColors';

import { useStyles, appBarHeight } from './styles/NewPaletteStyles';

export default function NewPalette(props) {
   const {
      palettes,
      history,
      savePalette,
      updatePalette,
      currentPalette,
      editPalette,
   } = props;

   const { maxColors = 20 } = props;

   const classes = useStyles();
   const [open, setOpen] = React.useState(true);
   const [currentColor, setCurrentColor] = React.useState('#FB0BEB');
   const palettecolors =
      palettes.length > 0
         ? palettes[0].colors.slice().splice(0, 10)
         : SeedColors[0].colors.splice(0, 10);
   const [colors, setColors] = React.useState(palettecolors);
   const [paletteFull, setpaletteFull] = React.useState(
      colors.length === maxColors
   );

   // Set Colors to updatePalette Colors
   // If we are in update mode
   React.useEffect(() => {
      if (updatePalette && currentPalette) {
         setColors(currentPalette.colors);
         setpaletteFull(currentPalette.colors.length === 20);
      }
   }, [updatePalette, currentPalette]);

   const randomNum = (range) => Math.floor(Math.random() * range);

   const generateRandomColor = () => {
      let isUniqueColor = true;
      let randomColor;
      while (isUniqueColor) {
         isUniqueColor = false;

         // console.log('randomNum is', randomNum());
         // * 1 Generate Random Color
         if (palettes.length === 0) {
            console.log('palette.lenth=0');
            const randomPalette = SeedColors[randomNum(SeedColors.length)];
            console.log('random palette is', randomPalette);
            randomColor =
               randomPalette.colors[randomNum(randomPalette.colors.length)];
         } else {
            console.log('palette.lenth!=0');
            const randomColors = palettes[randomNum(palettes.length)].colors;
            randomColor = randomColors[randomNum(randomColors.length)];
         }
         console.clear();
         console.log('random color is ', JSON.stringify(randomColor));

         // * 2 Ensure Color is NOT duplicate
         if (colors.length === 0) {
            break;
         }
         for (let i = 0; i < colors.length; i++) {
            if (colors[i].color === randomColor.color) {
               isUniqueColor = true;
               break;
            }
            if (
               colors[i].name.toLowerCase() === randomColor.name.toLowerCase()
            ) {
               isUniqueColor = true;
               break;
            } else {
               isUniqueColor = false;
            }
         }
         // isUniqueColor = false;
         setCurrentColor(randomColor.color);
      }

      return randomColor;
   };
   const onSortEnd = ({ oldIndex, newIndex }) => {
      setColors(arrayMove(colors, oldIndex, newIndex));
      // this.setState(({ items }) => ({
      //    items: arrayMove(items, oldIndex, newIndex),
      // }));
   };

   const removeColor = (colorName) => {
      // console.log('removing color', colorName);
      // console.log(
      //    'array after del is ',
      //    colors.filter((color) => color.name !== colorName)
      // );

      setColors(colors.filter((color) => color.name !== colorName));
      setpaletteFull(false);
   };

   const handleDrawerOpen = () => {
      // colors.map((el) => console.log(el));
      setOpen(true);
   };

   const addOrUpdatePalette = (newPaletteName, emoji, update) => {
      // let id = 'Test Palette'.toLowerCase().split(' ').join('-');
      let id = newPaletteName.toLowerCase().replace(/ /g, '-');

      const newPalette = {
         id,
         paletteName: newPaletteName,
         colors: colors,
         emoji,
      };

      console.log('newPalette', newPalette);
      if (update === true) {
         editPalette(newPalette);
      } else savePalette(newPalette);
   };
   const deleteAllColors = () => {
      // colors.map((el) => console.log(el));
      setColors([]);
      setpaletteFull(false);
   };

   const addRandomColor = () => {
      const randomColor = generateRandomColor(palettes);

      addNewColor({ randomColor });
   };

   const addNewColor = (colorObject) => {
      // console.clear();
      // console.log('colorObject is', colorObject);
      // ! Check if palette if Full or NOT
      // console.log('paletteFull', paletteFull);
      if (paletteFull === true) return;

      // console.log('colors.length', colors.length);

      if (colors.length === maxColors - 1) {
         // console.log('palette full');
         setpaletteFull(true);
      }

      // ^ Palette is NOT Full - Add New Color
      if (colorObject.randomColor) {
         // console.clear();
         // console.log(' random color is', colorObject.randomColor);
         setColors((currentColors) => [
            ...currentColors,
            colorObject.randomColor,
         ]);
         return;
      }

      const newColorObj = {
         color: colorObject.currentColor,
         name: colorObject.newColorName,
      };

      // console.log('setting new color ', newColorObj);
      setColors((currentColors) => [...currentColors, newColorObj]);

      setCurrentColor(generateRandomColor().color);
   };

   const handleChangeComplete = (color) => {
      console.clear();
      // console.log('changing currentColor to ', color);
      setCurrentColor(color.hex);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   return (
      <div className={classes.root}>
         <NewPaletteNav
            savePalette={savePalette}
            history={history}
            palettes={palettes}
            handleDrawerOpen={handleDrawerOpen}
            // classes={classes}
            updatePalette={updatePalette}
            currentPalette={currentPalette}
            open={open}
            addOrUpdatePalette={addOrUpdatePalette}
            colorsTotal={colors.length}
            appBarHeight={appBarHeight}
         />
         <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            <div className={classes.drawerHeader}>
               <div style={{ margin: ' auto' }}>
                  <h2 style={{ fontFamily: 'sans-serif' }}>
                     Design Your Palette
                  </h2>
               </div>
               <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
               </IconButton>
            </div>

            {/* <Divider /> */}
            <div className={classes.Container}>
               {/* <h2 style={{ fontFamily: 'sans-serif' }}>Design Your Palette</h2> */}

               <div className={classes.Buttons}>
                  <Button
                     variant='contained'
                     color='secondary'
                     onClick={deleteAllColors}
                  >
                     <BackspaceIcon style={{ marginRight: '10px' }} />
                     Clear Palette
                  </Button>
                  <span className={paletteFull ? classes.disabled : undefined}>
                     <Button
                        variant='contained'
                        color='primary'
                        onClick={addRandomColor}
                        disabled={paletteFull}
                     >
                        Random Color
                     </Button>
                  </span>
               </div>

               <ColorPicker
                  colors={colors}
                  paletteFull={paletteFull}
                  classes={classes}
                  addColor={addNewColor}
                  handleChangeComplete={handleChangeComplete}
                  currentColor={currentColor}
               />
            </div>
         </Drawer>
         <main
            className={clsx(classes.content, {
               [classes.contentShift]: open,
            })}
         >
            {/* <div className={classes.drawerHeader}></div> */}

            <DragableColorList
               colors={colors}
               removeBox={removeColor}
               axis='xy'
               onSortEnd={onSortEnd}
               appBarHeight={appBarHeight}
               distance={20}
            />
         </main>
      </div>
   );
}
