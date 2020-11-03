import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export class Palette extends Component {
   constructor(props) {
      super(props);

      this.state = {
         level: 500,
         format: 'hex',
      };
   }
   changeLevel = (newLevel) => {
      this.setState({
         level: newLevel,
      });
   };

   changeColorFormat = (val) => {
      this.setState({
         format: val,
      });
   };

   render() {
      const { colors, paletteName, emoji } = this.props.palette;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((el) => (
         // <ColorBox color={el.hex} name={el.name} key={uuid()} />
         <ColorBox color={el[format]} name={el.name} key={uuid()} />
      ));
      return (
         <div className='Palette'>
            <Navbar
               level={level}
               changeLevel={this.changeLevel}
               handleChange={this.changeColorFormat}
            />
            <div className='Palette-Colors'>{colorBoxes}</div>

            <footer className='Palette-footer'>
               {paletteName}
               <span className='Palette-emoji'>{emoji}</span>
            </footer>
         </div>
      );
   }
}

export default Palette;
