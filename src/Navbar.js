import React, { Component } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles/Navbar.css';

// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons/';

export class Navbar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         format: 'hex',
         open: false,
      };
   }

   handleChange = (e) => {
      this.setState({
         format: e.target.value,
      });
      this.props.handleChange(e.target.value);

      this.setState({
         open: true,
      });
   };

   closeSnackbar = () => {
      this.setState({
         open: false,
      });
   };
   render() {
      const { level, changeLevel, showSlider } = this.props;
      const { format } = this.state;
      return (
         <nav className='Navbar'>
            <div
               className='logo'
               style={{
                  width: !showSlider && '50%',
               }}
            >
               <a href='/'>ReactColorPicker</a>
            </div>
            {showSlider && (
               <div className='Slider-Container'>
                  <span>Level : {level}</span>
                  <div className='Slider'>
                     <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                     />
                     {/* Navbar */}
                  </div>
               </div>
            )}

            <div
               className='select-container'
               style={{
                  width: !showSlider && '50%',
                  justifyContent: 'center',
               }}
            >
               <Select value={format} onChange={this.handleChange}>
                  <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                  <MenuItem value='rbg'>RBG - rbg(255,255,255)</MenuItem>
                  <MenuItem value='rbga'>RBGA - rbga(255,255,255,1,3)</MenuItem>
               </Select>
            </div>

            <Snackbar
               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
               open={this.state.open}
               autoHideDuration={3000}
               message={
                  <span id='msgId'>
                     Format Changed to {this.state.format.toUpperCase()}
                  </span>
               }
               ContentProps={{ 'aria-describedby': 'msgId' }}
               onClose={this.closeSnackbar}
               action={[
                  <IconButton
                     onClick={this.closeSnackbar}
                     color='inherit'
                     key='close'
                     aria-label='close'
                  >
                     <CloseIcon />
                  </IconButton>,
               ]}
            ></Snackbar>
         </nav>
      );
   }
}

export default Navbar;
