import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles/NewPaletteNavStyles';

import PaletteMetaForm from './PaletteMetaForm';

function NewPaletteNav(props) {
   const classes = useStyles();

   const {
      palettes,
      handleDrawerOpen,
      createPalette,
      colorsTotal,
      appBarHeight,
   } = props;

   // const classes = useStyles();

   const handleClick = () => {
      handleDrawerOpen();
   };

   return (
      <div className='NewPaletteNav'>
         <CssBaseline />
         <AppBar
            color='default'
            position='fixed'
            className={clsx(classes.appBar, {
               [classes.appBarShift]: props.open,
            })}
            style={{ height: appBarHeight }}
         >
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handleClick}
                  edge='start'
                  className={clsx(
                     classes.menuButton,
                     props.open && classes.hide
                  )}
               >
                  <MenuIcon />
               </IconButton>
               <Typography style={{ fontFamily: 'sans-serif' }} variant='h5'>
                  Create A Palette !
               </Typography>
               {/* <h2 style={{ fontFamily: 'sans-serif' }}>Create A Palette !</h2> */}
            </Toolbar>
            <div className={classes.NavBtns}>
               <PaletteMetaForm
                  palettes={palettes}
                  colorsTotal={colorsTotal}
                  createPalette={(paletteName, emoji) => {
                     console.clear();
                     console.log('got into new palette nav');
                     createPalette(paletteName, emoji);
                  }}
               />
               <div>
                  <Link to='/' style={{ textDecoration: 'none' }}>
                     <Button
                        variant='contained'
                        color='secondary'
                        style={{ cursor: 'pointer' }}
                     >
                        <KeyboardBackspaceIcon
                           style={{ marginRight: '10px' }}
                        />
                        Go Back
                     </Button>
                  </Link>
               </div>
            </div>
         </AppBar>
      </div>
   );
}

export default NewPaletteNav;
