import React, { Component } from 'react';
import './ColorBox.css';

import { CopyToClipboard } from 'react-copy-to-clipboard';

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
      const { color, name } = this.props;
      const { copied } = this.state;
      return (
         <CopyToClipboard text={color} onCopy={this.changeCopyState}>
            <div style={{ background: color }} className='ColorBox'>
               <div
                  style={{ background: color }}
                  className={`copy-overlay ${copied && 'show'}`}
               ></div>
               <div className={`copied-text ${copied && 'show'}`}>
                  <h1>Copied!</h1>
                  <p>{color}</p>
               </div>
               <div className='copy-container'>
                  <div className='box-content'>
                     <span>{name}</span>
                  </div>
                  <button className='copy-button'>Copy</button>
               </div>
               <span className='see-more'>MORE</span>
            </div>
         </CopyToClipboard>
      );
   }
}

export default ColorBox;
