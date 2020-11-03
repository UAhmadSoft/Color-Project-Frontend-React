import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

import { generatePalette } from './colorsHelper';

import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';

export class App extends Component {
   findPalette = (id) => seedColors.find((palette) => palette.id === id);

   render() {
      // console.log(generatePalette(seedColors[2]));

      return (
         <div className='App'>
            <Switch>
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
                     <PaletteList palettes={seedColors} />
                  )}
               />
            </Switch>
         </div>
      );
   }
}

export default App;
