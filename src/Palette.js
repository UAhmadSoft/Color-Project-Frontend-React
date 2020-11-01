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
      };
   }
   changeLevel = (newLevel) => {
      this.setState({
         level: newLevel,
      });
   };

   render() {
      const { colors } = this.props.pallete;
      const { level } = this.state;
      const colorBoxes = colors[level].map((el) => (
         <ColorBox color={el.hex} name={el.name} key={uuid()} />
      ));
      return (
         <div className='Pallete'>
            <Navbar level={level} changeLevel={this.changeLevel} />
            <div className='Pallete-Colors'>{colorBoxes}</div>
            {/* Footer */}
         </div>
      );
   }
}

export default Palette;
