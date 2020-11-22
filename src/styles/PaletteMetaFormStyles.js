import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
   DialogContent: {
      width: '450px',
      '& input,label': {
         fontFamily: 'sans-serif',
      },
   },
   DialogTitle: {
      '& h2': {
         fontFamily: 'sans-serif',
         fontSize: '1.5rem',
      },
   },
   DialogActions: {
      '& button': {
         fontFamily: 'sans-serif',
         fontWeight: '600',
      },
   },
   myEmojiPicker: {},
   '.emoji-mart-emoji': {
      cursor: 'pointer',
   },
}));
