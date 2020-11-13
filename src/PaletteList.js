import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

import uuid from 'uuid/dist/v4';

import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      background: 'blue',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'auto',
      // paddingBottom: '100px',
   },
   container: {
      width: '50%',
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
      color: 'white',
   },
   palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,30%)',
      gridGap: '5%   ',
   },
};

export class PaletteList extends Component {
   gotoPalette = (id) => {
      // console.log('id is', id);
      this.props.history.push(`/palette/${id}`);
   };
   render() {
      const { palettes, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h1>React Colors</h1>
               </nav>
               <div className={classes.palettes}>
                  {palettes.map((el) => (
                     <MiniPalette
                        {...el}
                        handleClick={this.gotoPalette}
                        key={uuid()}
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
