import chroma from 'chroma-js';
import { genMediaQuery } from './constants';

export default {
   colorBox: {
      width: '20%',
      height: (props) => (props.showFullPalette ? '25%' : '50%'),
      // height: '25%',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      margin: '0 auto',
      marginBottom: '-5px',
      '&:hover button': {
         opacity: '1',
      },

      [genMediaQuery('lg')]: {
         width: '33%',
         height: '20% !important',
      },
      [genMediaQuery('md')]: {
         width: '50%',
         height: '10% !important',
      },
      [genMediaQuery('sm')]: {
         width: '100%',
         height: '10% !important',
      },
   },
   copyText: {
      color: (props) =>
         chroma(props.color).luminance() >= 0.5 ? 'black' : 'white',
   },
   seeMoreBtn: {
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.3)',
      position: 'absolute',
      border: 'none',
      right: '0',
      bottom: '0px',
      width: '60px',
      height: '30px',
      paddingRight: '5px',
      marginRight: '5px',
      lineHeight: '30px',
      // color: 'white',
      color: (props) =>
         chroma(props.color).luminance() >= 0.5 ? 'black' : 'white',
   },
   copyContainerSpan: {
      color: (props) =>
         chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
   },
   copyButton: {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      opacity: ' 0',

      color: (props) =>
         chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
      border: (props) =>
         chroma(props.color).luminance() <= 0.08 ? '0' : '1px solid black',
   },
   boxContent: {
      position: 'absolute',
      padding: '10px',
      width: '100%',
      left: '0px',
      bottom: '0px',
      color: 'black',
      letterSpacing: ' 1px',
      textTransform: ' uppercase',
      fontSize: ' 12px',
      fontWeight: ' 500',
   },
   copyOverlay: {
      opacity: '0',
      zIndex: '0',
      width: '100%',
      height: '100%',
      transition: 'transform 1s ease-in-out',
      transform: 'scale(0.1)',
   },
   showOverlay: {
      opacity: '1',
      position: 'absolute',
      transform: 'scale(50)',
      zIndex: '10',
   },
   copiedMsg: {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      display: 'flex',
      alignItems: ' center',
      justifyContent: ' center',
      fontSize: ' 2rem',
      transform: 'scale(0.1)',
      opacity: '0',
      color: '#ffffff',
      flexDirection: 'column',
      letterSpacing: '2px',
      '& h1': {
         textAlign: ' center',
         fontWeight: ' 400',
         textShadow: ' 1px 2px black',
         backgroundColor: ' rgba(255, 255, 255, 0.2)',
         width: '100%',
         marginBottom: ' 0',
         padding: '1rem',
         textTransform: 'uppercase',
      },
      '& p': {
         fontSize: '2rem',
         fontWeight: '100',
      },
   },
   showMsg: {
      zIndex: ' 25',
      opacity: '1',
      transform: 'scale(1)',
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.3s',
   },
};
