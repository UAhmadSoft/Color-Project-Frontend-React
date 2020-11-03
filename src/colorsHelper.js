import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

//       colors: [
//          { name: 'red', color: '#F44336' },
//          { name: 'pink', color: '#E91E63' },
//          { name: 'purple', color: '#9C27B0' },
//          { name: 'deeppurple', color: '#673AB7' },
//          { name: 'indigo', color: '#3F51B5' },
//          { name: 'blue', color: '#2196F3' },
//          { name: 'lightblue', color: '#03A9F4' },
//          { name: 'cyan', color: '#00BCD4' },
//          { name: 'teal', color: '#009688' },
//          { name: 'green', color: '#4CAF50' },
//          { name: 'lightgreen', color: '#8BC34A' },
//          { name: 'lime', color: '#CDDC39' },
//          { name: 'yellow', color: '#FFEB3B' },
//          { name: 'amber', color: '#FFC107' },
//          { name: 'orange', color: '#FF9800' },
//          { name: 'deeporange', color: '#FF5722' },
//          { name: 'brown', color: '#795548' },
//          { name: 'grey', color: '#9E9E9E' },
//          { name: 'bluegrey', color: '#607D8B' },
//       ],
//    }
function generatePalette(starterPalette) {
   // ?    basic name , id and emoji setting
   let newPalette = {
      paletteName: starterPalette.paletteName,
      id: starterPalette.id,
      emoji: starterPalette.emoji,
      colors: {},
   };

   // ^ Include Levels fields in Palette
   for (let level of levels) {
      newPalette.colors[level] = [];

      //^   colors[50] :[]
      //*   colors[100] : []
      //& colors[200] : []
      //~ ... and so on ....
   }

   // *  Generate Scale Of all Colors
   // * from light to dark
   // * like [ 50 Yellow , 100 Yellow , ... ,900 yellow ]
   for (let color of starterPalette.colors) {
      let scale = generateScale(color.color, 10).reverse();
      for (let i in scale) {
         newPalette.colors[levels[i]].push({
            name: `${color.name} ${levels[i]}`, //* name : 'pink 50'
            id: color.name.toLowerCase().replace(/ /g, '-'),
            hex: scale[i],
            rbg: chroma(scale[i]).css(),
            rbga: chroma(scale[i])
               .css()
               .replace('rbg', 'rgba')
               .replace(')', ',1.0)'),
         });
      }
   }

   return newPalette;
}

// ~ Generate Array of Scale
// ~ Like [darkColor  ,  color , white ]
function genRange(hexColor) {
   const end = '#fff';
   return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
// & Generate 10 colors from scale [dark,color,white]
function generateScale(hexColor, numColors) {
   return chroma.scale(genRange(hexColor)).mode('lab').colors(numColors);
}

export { generatePalette };
