import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
   root: {
      width: '80%',
   },
   picker: {
      width: '100% !important',
      marginTop: '2rem',
   },
   addNewButton: {
      width: '100%',
      padding: '1rem',
      fontSize: '1.5rem',
      letterSpacing: '4px',
      wordSpacing: '5px',
      fontWeight: 'bold',
      height: '50px',
      fontFamily: 'sans-serif',
      // color: (props) =>
      //    chroma(props.currentColor).luminance() <= 0.08 ? 'white' : 'black',
   },
   colorNameInput: {
      '& .Mui-error input': {
         cursor: 'not-allowed',
      },
      width: '100%',
      height: '70px',
      '& input': {
         fontSize: '1.5rem',
         fontFamily: 'sans-serif',
      },
      '& p': {
         color: 'red !important',
         fontSize: '1.2em',
         fontWeight: 'bold',
         fontFamily: 'system-ui',
         letterSpacing: '1px',
      },
   },

   disabled: {
      cursor: 'not-allowed',
   },
}));
