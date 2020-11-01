import React, { Component } from 'react';
import Pallete from './Palette';
import seedColors from './seedColors';

import { generatePallete } from './colorsHelper';

export class App extends Component {
   render() {
      console.log(generatePallete(seedColors[2]));

      return (
         <div className='App'>
            <Pallete pallete={generatePallete(seedColors[2])} />
         </div>
      );
   }
}

export default App;
