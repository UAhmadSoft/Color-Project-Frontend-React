import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './constants';

// const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
   NewPaletteNav: {
      display: 'flex',
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'gold',
      // height: '64px',
      // height: appBarHeight,
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   hide: {
      display: 'none',
   },
   formValidator: {
      '& p , input , label': {
         fontFamily: 'sans-serif',
      },
   },
   NavBtns: {
      marginRight: '20px',
      minWidth: '250px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '& button': {
         fontWeight: '600',
         fontFamily: 'arial',
      },
   },
}));

export default useStyles;
