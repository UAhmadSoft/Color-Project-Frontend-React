export default {
   root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'visible',
      '&:hover': {
         cursor: 'pointer',
      },
   },
   colors: {
      backgroundColor: '#dae1e4',
      height: '150px',
      width: '100%',
      borderRadius: '5px',
      overflow: 'hidden',
   },
   title: {
      display: 'flex ',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0',
      paddingTop: '0.5rem',
      fontSize: '1rem',
      position: 'relative',
      color: 'black',
   },
   emoji: {
      marginLeft: '0.5rem',
      fontSize: '1.5rem ',
   },
   miniColor: {
      height: '25%',
      width: '20%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '-3.5px',
   },
   Icons: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: '5',
      right: '1px',
      top: '0px',
   },
   DeleteIcon: {
      '&:hover ': {
         // transform: 'scale(1.1)',
         opacity: '1',
      },
      borderRadius: '10px',
      background: 'red',
      padding: '0.2em',
      border: '5x',
      zIndex: ' 5',
      color: 'white',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      opacity: '0.4',
      textAlign: 'center',
      width: '40px',
      height: '40px',
   },
   EditIcon: {
      '&:hover ': {
         // transform: 'scale(1.1)',
         opacity: '1',
      },
      borderRadius: '10px',
      background: '#58a3df',
      padding: '0.2em',
      border: '5x',
      zIndex: ' 5',
      color: 'white',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      opacity: '0.4',
      textAlign: 'center',
      width: '40px',
      height: '40px',
   },
};
