import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './styles/Palette.css';
import PaletteFooter from './PaletteFooter';

import styles from './styles/PaletteStyles.js';
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
      const { colors, paletteName, emoji, id } = this.props.palette;
      const { classes } = this.props;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((el) => (
         // <ColorBox color={el.hex} name={el.name} key={uuid()} />
         <ColorBox
            color={el[format]}
            name={el.name}
            key={el.id}
            colorId={el.id}
            paletteId={id}
            showFullPalette={true}
         />
      ));
      return (
         <div className={classes.palette}>
            <Navbar
               showSlider
               level={level}
               changeLevel={this.changeLevel}
               handleChange={this.changeColorFormat}
            />
            <div className={classes.paletteColors}>{colorBoxes}</div>

            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      );
   }
}

export default withStyles(styles)(Palette);
