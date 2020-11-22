import { genMediaQuery } from './constants';

import bg from './svgs/bg1.svg';
export default {
   root: {
      background: 'blue',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'auto',
      backgroundColor: '#1462aa',
      backgroundImage: `url(${bg})`,
      // paddingBottom: '100px',
      '@global': {
         '.fade-exit': {
            opacity: '1',
         },
         '.fade-exit-active': {
            opacity: '0',
            transition: 'opacity 500ms ease-out',
         },
         '.fade-enter': {
            opacity: '0',
         },
         '.fade-enter-active': {
            opacity: '0',
            transition: 'opacity 500ms ease-out',
         },
      },
   },
   container: {
      width: '80%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: ' wrap',
      // border: '1px solid white',
   },
   nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      '& a': {
         //  textDecoration: 'none',
         color: '#fff',
      },
   },
   palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,20%)',
      gridGap: '5%   ',
      [genMediaQuery('lg')]: {
         gridTemplateColumns: 'repeat(2,50%)',
      },
      [genMediaQuery('md')]: {
         gridTemplateColumns: 'repeat(1,100%)',
      },
   },
};
