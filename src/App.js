import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

import { generatePalette } from './colorsHelper';

import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';
import NotFound from './NotFound';

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
            <Switch>
               <Route
                  exact
                  path='/AddNewPalette'
                  render={(routerProps) => (
                     <NewPalette
                        savePalette={this.savePalette}
                        {...routerProps}
                        palettes={this.state.palettes}
                     />
                  )}
               />
               <Route
                  exact
                  path='/palette/:id'
                  render={(routerProps) => (
                     <Palette
                        palette={generatePalette(
                           this.findPalette(routerProps.match.params.id)
                        )}
                     />
                  )}
               />
               <Route
                  exact
                  path='/'
                  render={(routerProps) => (
                     <PaletteList
                        palettes={this.state.palettes}
                        {...routerProps}
                        deletePalette={this.deletePalette}
                     />
                  )}
               />
               <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={(routerProps) => (
                     <SingleColorPalette
                        palette={generatePalette(
                           this.findPalette(routerProps.match.params.paletteId)
                        )}
                        colorId={routerProps.match.params.colorId}
                     />
                  )}
               />
               <Route component={NotFound} />
            </Switch>
         </div>
      );
   }
}

export default App;
