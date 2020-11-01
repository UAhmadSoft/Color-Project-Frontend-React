import React, { Component } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Navbar.css';

export class Navbar extends Component {
   render() {
      const { level, changeLevel } = this.props;
      return (
         <nav className='Navbar'>
            <div className='logo'>
               <a href='/'>ReactColorPicker</a>
            </div>
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
         </nav>
      );
   }
}

export default Navbar;
