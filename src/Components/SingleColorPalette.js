import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import { withStyles } from '@material-ui/styles';

import '../styles/Palette.css';
import PaletteFooter from './PaletteFooter';

import styles from '../styles/SinglePaletteStyles';

export class SingleColorPalette extends Component {
   constructor(props) {
      super(props);

      this._shades = this.gatherShades(this.props.palette, this.props.colorId);

      this.state = {
         format: 'hex',
      };
      // console.log(this._shades);
   }
   gatherShades = (palette, colorId) => {
      // Return all shades of this color
      let shades = [];
      let allColors = palette.colors;

      for (const key in allColors) {
         if (allColors.hasOwnProperty(key)) {
            shades = shades.concat(
               allColors[key].filter((color) => color.id === colorId)
            );
         }
      }
      return shades.slice(1);
   };

   changeColorFormat = (val) => {
      this.setState({
         format: val,
      });
   };
   render() {
      const { format } = this.state;
      const { palette, classes } = this.props;

      const colorBoxes = this._shades.map((shade) => (
         <ColorBox
            key={shade.name}
            name={shade.name}
            color={shade[format]}
            showFullPalette={false}
         />
      ));
      return (
         <div className={classes.palette}>
            <Navbar showSlider={false} handleChange={this.changeColorFormat} />
            <div className={classes.paletteColors}>
               {colorBoxes}
               <div className={classes.goBack}>
                  <Link
                     className={classes.backBtn}
                     to={`/palette/${palette.id}`}
                  >
                     go back
                  </Link>
               </div>
            </div>

            <PaletteFooter
               paletteName={palette.paletteName}
               emoji={palette.emoji}
            />
         </div>
      );
   }
}

export default withStyles(styles)(SingleColorPalette);
