import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class PaletteList extends Component {
   render() {
      const { palettes } = this.props;
      return (
         <div className='PaletteList'>
            <h1>React Colors</h1>
            {palettes.map((el) => (
               <div>
                  <NavLink to={`/palette/${el.id}`}>{el.paletteName}</NavLink>
               </div>
            ))}
         </div>
      );
   }
}

export default PaletteList;
