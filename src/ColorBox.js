import React, { Component } from 'react';
import './styles/ColorBox.css';

import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import styles from './styles/ColorBoxStyles';

export class ColorBox extends Component {
   constructor(props) {
      super(props);

      this.state = {
         copyOverlay: false,
      };
   }
   changeCopyState = () => {
      console.log('copied called');
      this.setState({ copied: true }, () => {
         setTimeout(
            () =>
               this.setState({
                  copied: false,
               }),
            1400
         );
      });
   };

   render() {
      const {
         color,
         name,
         paletteId,
         colorId,
         showFullPalette,
         classes,
      } = this.props;
      const { copied } = this.state;

      // ~ Alternative Approach
      // const isDarkColor = chroma(color).luminance() <= 0.08;
      // const isLightColor = chroma(color).luminance() >= 0.5;
      return (
         <CopyToClipboard text={color} onCopy={this.changeCopyState}>
            <div style={{ background: color }} className={classes.colorBox}>
               <div
                  style={{ background: color }}
                  className={`${classes.copyOverlay} ${
                     copied && classes.showOverlay
                  }`}
               ></div>
               <div
                  className={`${classes.copiedMsg} ${
                     copied && classes.showMsg
                  }`}
               >
                  <h1 className={`${classes.copyText}`}>Copied!</h1>
                  <p className={`${classes.copyText}`}>{color}</p>
                  {/*
                  // ~ Alternative Way
                   <h1 className={`${isLightColor && 'dark-text'}`}>Copied!</h1>
                  <p className={`${isLightColor && 'dark-text'}`}>{color}</p> */}
               </div>
               <div className='copy-container'>
                  <div className={classes.boxContent}>
                     <span className={classes.copyContainerText}>{name}</span>
                  </div>
                  <button className={classes.copyButton}>
                     {/* <div className='box-content'>
                     <span className={isDarkColor && 'light-text'}>{name}</span>
                  </div>
                  <button
                     className={
                        isDarkColor ? 'light-text copy-button' : 'copy-button'
                     }
                  > */}
                     Copy
                  </button>
               </div>
               {showFullPalette && (
                  <Link
                     to={`/palette/${paletteId}/${colorId}`}
                     onClick={(e) => e.stopPropagation()}
                  >
                     <span className={`see-more ${classes.seeMoreBtn}`}>
                        {/* {chroma(color).luminance()} */}
                        MORE
                     </span>
                  </Link>
               )}
            </div>
         </CopyToClipboard>
      );
   }
}

export default withStyles(styles)(ColorBox);
