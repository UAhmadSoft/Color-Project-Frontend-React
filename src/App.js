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
import Page from './Page';
export class App extends Component {
   constructor(props) {
      super(props);

      let savedPalettes;
      try {
         // ~ Get Palettes from Localstorge
         // * Save to this.state if it exists
         savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

         this.state = {
            palettes: savedPalettes || seedColors,
         };

         // console.log('savedPalettes', savedPalettes);
         // console.log('palettes', this.state.palettes);
      } catch (e) {
         this.state = {
            palettes: savedPalettes || seedColors,
         };
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
      // console.log('syncing to local storage');
      // console.log(this.state.palettes);
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
                        classNames='page'
                        timeout={500}
                        key={location.key}
                     >
                        <Switch location={location}>
                           <Route
                              exact
                              path='/AddNewPalette'
                              render={(routerProps) => (
                                 <Page className='page'>
                                    <NewPalette
                                       savePalette={this.savePalette}
                                       {...routerProps}
                                       palettes={this.state.palettes}
                                    />
                                 </Page>
                              )}
                           />
                           <Route
                              exact
                              path='/palette/:id'
                              render={(routerProps) => (
                                 <Page className='page'>
                                    <Palette
                                       palette={generatePalette(
                                          this.findPalette(
                                             routerProps.match.params.id
                                          )
                                       )}
                                    />
                                 </Page>
                              )}
                           />
                           <Route
                              exact
                              path='/'
                              render={(routerProps) => (
                                 <Page className='page'>
                                    <PaletteList
                                       palettes={this.state.palettes}
                                       {...routerProps}
                                       deletePalette={this.deletePalette}
                                    />
                                 </Page>
                              )}
                           />
                           <Route
                              exact
                              path='/palette/:paletteId/:colorId'
                              render={(routerProps) => (
                                 <Page className='page'>
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
                                 </Page>
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
