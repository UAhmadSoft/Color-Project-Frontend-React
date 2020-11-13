export default {
   palette: {
      height: '100vh',
      /* display: flex,
   flex-direction: column, */
      /* display: flex,
   flex-direction: column, */
      display: 'flex',
      flexDirection: 'column',
   },
   paletteColors: {
      height: '90%',
   },
   goBack: {
      width: '20%',
      height: (props) => (props.showFullPalette ? '25%' : '50%'),
      // height: '25%',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      margin: '0 auto',
      marginBottom: '-5px',
      opacity: '1',
      backgroundColor: 'rgb(0, 0, 0)',
   },
};
