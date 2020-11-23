import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import DeletePaletteConfirm from './DeletePaletteConfirm';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './styles/PaletteListStyles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
   constructor(props) {
      super(props);

      this.state = {
         showConfirmDialog: false,
         deleteId: null,
      };
   }

   gotoPalette = (id) => {
      // console.log('id is', id);
      this.props.history.push(`/palette/${id}`);
   };

   toogleDialog = () => {
      this.setState({
         showConfirmDialog: !this.state.showConfirmDialog,
      });
   };

   deletePalette = (id) => {
      this.setState({
         deleteId: id,
      });
      this.toogleDialog();
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

               <TransitionGroup className={classes.palettes}>
                  {palettes.map((el) => (
                     <CSSTransition key={el.id} classNames='fade' timeout={500}>
                        <MiniPalette
                           {...el}
                           handleClick={this.gotoPalette}
                           key={el.id}
                           // deletePalette={(id) => deletePalette(id)}
                           deletePalette={this.deletePalette}
                        />
                     </CSSTransition>
                  ))}
               </TransitionGroup>
               <DeletePaletteConfirm
                  open={this.state.showConfirmDialog}
                  handleClick={() => {
                     deletePalette(this.state.deleteId);
                     this.toogleDialog();
                  }}
                  toogleDialog={this.toogleDialog}
               />
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
