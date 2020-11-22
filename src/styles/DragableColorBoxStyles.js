import { genMediaQuery } from './constants';

export default {
   root: {
      width: '20%',
      height: '100%',
      // height: '25%',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      margin: '0 auto',
      marginBottom: '-5px',
      fontFamily: 'sans-serif',
      '&:hover svg': {
         color: '#fff',
         transform: 'scale(1.5)',
      },
      [genMediaQuery('lg')]: {
         width: '33% !important',
      },
      [genMediaQuery('sm')]: {
         width: '100% !important',
      },
   },
   boxContent: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      padding: '10px',
      width: '100%',
      left: '0px',
      bottom: '0px',
      color: 'rgba(0,0,0,0.5)',
      letterSpacing: ' 1px',
      textTransform: ' uppercase',
      fontSize: ' 12px',
      fontWeight: ' 500',
   },
   deleteIcon: {
      color: 'black',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
   },
};
