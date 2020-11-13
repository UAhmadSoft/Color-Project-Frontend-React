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
      '&:hover button': {
         opacity: '1',
      },
      backgroundColor: 'black',
   },
   backBtn: {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: ' -50px',
      marginTop: ' -15px',
      textAlign: ' center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: ' 1rem',
      lineHeight: ' 30px',
      color: 'white',
      textTransform: 'uppercase',
      border: '0',
      cursor: 'pointer',
      textDecoration: 'none',
   },
};
