import { makeStyles } from '@material-ui/core/styles';

import { appBarHeight, drawerWidth } from './constants';
// const appBarHeight = '64px';

// const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
   root: {
      fontFamily: 'sans-serif',
      display: 'flex',
   },

   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      border: '0',
      width: drawerWidth,
   },
   hide: {
      display: 'none',
   },
   drawerHeader: {
      backgroundColor: 'darkturquoise',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   },
   content: {
      height: `calc(100vh -  ${appBarHeight} )`,
      // height: 'calc(100vh - 64px)',
      // height: '100vh',
      padding: '0px',
      flexGrow: 1,
      // padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   },
   h4: {
      fontWeight: 600,
      fontFamily: 'sans-serif',
   },
   addNewButton: {
      color: 'white',
      fontWeight: '600',
      '& .disabled': {
         backgroundColor: 'grey',
      },
   },
   Container: {
      backgroundColor: 'cornflowerblue',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   disabled: {
      cursor: 'not-allowed',
   },
}));

export { useStyles, appBarHeight };
