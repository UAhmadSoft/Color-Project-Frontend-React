import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

import uuid from 'uuid/dist/v4';

import styles from './styles/PaletteListStyles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
   gotoPalette = (id) => {
      // console.log('id is', id);
      this.props.history.push(`/palette/${id}`);
   };
   render() {
      const { palettes, classes, deletePalette } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h1>React Colors</h1>
                  <Link
                     to='/addNewPalette'
                     style={{
                        textDecoration: 'none',
                        fontSize: '1.2em',
                        right: '30px',
                        position: 'relative',
                     }}
                  >
                     Create Palette
                     <NoteAddIcon
                        style={{
                           marginLeft: '8px',
                           fontSize: '1.6em',
                           position: 'absolute',
                        }}
                     />
                  </Link>
               </nav>

               <div className={classes.palettes}>
                  {palettes.map((el) => (
                     <MiniPalette
                        {...el}
                        handleClick={this.gotoPalette}
                        key={uuid()}
                        deletePalette={(id) => deletePalette(id)}
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
