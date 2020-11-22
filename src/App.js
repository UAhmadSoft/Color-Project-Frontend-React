import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

import { generatePalette } from './colorsHelper';

import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';
import NotFound from './NotFound';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
export class App extends Component {
   constructor(props) {
      super(props);

      let savedPalettes;
      try {
         // ~ Get Palettes from Localstorge
         // * Save to this.state if it exists
         savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

         console.clear();
         this.state = {
            palettes: savedPalettes || seedColors,
         };

         console.log('savedPalettes', savedPalettes);
         console.log('palettes', this.state.palettes);
      } catch (e) {
         this.state = {
            palettes: savedPalettes || seedColors,
         };
         console.clear();
         console.log('error caught in catch ', e);
      }
   }

   findPalette = (id) =>
      this.state.palettes.find((palette) => palette.id === id);

   savePalette = (newPalette) => {
      // console.log(newPalette);
      this.setState(
         {
            palettes: [...this.state.palettes, newPalette],
         },
         () => {
            console.clear();
            console.log(
               'saveing palettes to localstorage',
               this.state.palettes
            );
            this.syncLocalStorage();
         }
      );
   };

   syncLocalStorage() {
      // & Save palettes to localstorage
      console.clear();
      console.log('syncing to local storage');
      console.log(this.state.palettes);
      window.localStorage.setItem(
         'palettes',
         JSON.stringify(this.state.palettes)
      );
   }
   deletePalette = (id) => {
      // console.log('deleting palette :', id);
      this.setState(
         {
            palettes: this.state.palettes.filter((el) => el.id !== id),
         },
         () => {
            console.clear();
            console.log(
               'saveing palettes to localstorage',
               this.state.palettes
            );
            this.syncLocalStorage();
         }
      );
   };
   render() {
      // console.log(generatePalette(seedColors[2]));

      return (
         <div className='App'>
            <Route
               render={({ location }) => (
                  <TransitionGroup>
                     <CSSTransition
                        classNames='fade'
                        timeout={500}
                        key={location.key}
                     >
                        <Switch location={location}>
                           <Route
                              exact
                              path='/AddNewPalette'
                              render={(routerProps) => (
                                 <div className='page'>
                                    <NewPalette
                                       savePalette={this.savePalette}
                                       {...routerProps}
                                       palettes={this.state.palettes}
                                    />
                                 </div>
                              )}
                           />
                           <Route
                              exact
                              path='/palette/:id'
                              render={(routerProps) => (
                                 <div className='page'>
                                    <Palette
                                       palette={generatePalette(
                                          this.findPalette(
                                             routerProps.match.params.id
                                          )
                                       )}
                                    />
                                 </div>
                              )}
                           />
                           <Route
                              exact
                              path='/'
                              render={(routerProps) => (
                                 <div className='page'>
                                    <PaletteList
                                       palettes={this.state.palettes}
                                       {...routerProps}
                                       deletePalette={this.deletePalette}
                                    />
                                 </div>
                              )}
                           />
                           <Route
                              exact
                              path='/palette/:paletteId/:colorId'
                              render={(routerProps) => (
                                 <div className='page'>
                                    <SingleColorPalette
                                       palette={generatePalette(
                                          this.findPalette(
                                             routerProps.match.params.paletteId
                                          )
                                       )}
                                       colorId={
                                          routerProps.match.params.colorId
                                       }
                                    />
                                 </div>
                              )}
                           />
                           <Route component={NotFound} />
                        </Switch>
                     </CSSTransition>
                  </TransitionGroup>
               )}
            />
         </div>
      );
   }
}

export default App;
