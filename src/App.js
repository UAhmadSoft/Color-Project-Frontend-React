import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import axios from 'axios';

// import seedColors from './seedColors';
import { generatePalette } from './colorsHelper';
import { Switch, Route, Redirect } from 'react-router-dom';
import Palette from './Components/Palette';
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPalette from './Components/NewPalette';
import Page from './Components/Page';
import Login from './Components/Login';
import Register from './Components/Register';

import './styles/App.css';

const API_URL =
  'https://node-colors-api.herokuapp.com/api/v1/palettes';
// const API_URL = 'http://127.0.0.1:5000/api/v1/palettes';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes: [],
      fetchingFromAPI: true,
      updatePaletteId: '',
    };
    // let savedPalettes;
    // try {
    //       // ~ Get Palettes from Localstorge
    //    // * Save to this.state if it exists
    //    savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

    //    // console.log('savedPalettes', savedPalettes);
    //    // console.log('palettes', this.state.palettes);
    // } catch (e) {
    //    console.log('error caught in catch ', e);
    // } finally {
    //    this.state = {
    //       palettes: savedPalettes || seedColors,
    //    };
    // }
  }

  findPalette = (id) =>
    this.state.palettes.find((palette) => palette.id === id);

  savePalette = async (newPalette) => {
    // console.log(newPalette);

    // % Saving new Palette to DB
    const res = await axios.post(API_URL, {
      palette: newPalette,
    });

    console.clear();
    // console.log('res', res.data.data);
    newPalette = res.data.data;

    Object.keys(newPalette).forEach((key) => {
      if (key === 'name') {
        // console.log(`changing key ${key}`);
        Object.defineProperty(
          newPalette,
          'paletteName',
          Object.getOwnPropertyDescriptor(newPalette, key)
        );
        delete newPalette[key];
      }
      if (key === '_id') {
        // console.log(`changing key ${key}`);
        Object.defineProperty(
          newPalette,
          'id',
          Object.getOwnPropertyDescriptor(newPalette, key)
        );
        delete newPalette[key];
      }
    });

    // console.log('newPalette', newPalette);

    this.setState({
      palettes: [...this.state.palettes, newPalette],
    });
    // this.setState(
    //    {
    //       palettes: [...this.state.palettes, newPalette],
    //    },
    //    () => {
    //       console.log(
    //          'saveing palettes to localstorage',
    //          this.state.palettes
    //       );
    //       this.syncLocalStorage();
    //    }
    // );
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

  editPalette = async (updatedPalette) => {
    // console.log('updatedPalettes', updatedPalette);
    const res = await axios.patch(
      `${API_URL}/${this.state.updatePaletteId}`,
      {
        palette: updatedPalette,
      }
    );

    let newPalette = res.data.data;

    Object.keys(newPalette).forEach((key) => {
      if (key === 'name') {
        // console.log(`changing key ${key}`);
        Object.defineProperty(
          newPalette,
          'paletteName',
          Object.getOwnPropertyDescriptor(newPalette, key)
        );
        delete newPalette[key];
      }
      if (key === '_id') {
        // console.log(`changing key ${key}`);
        Object.defineProperty(
          newPalette,
          'id',
          Object.getOwnPropertyDescriptor(newPalette, key)
        );
        delete newPalette[key];
      }
    });

    // console.log('newPalette', newPalette);

    // Find Index of Updated Palette
    const index = this.state.palettes.findIndex(
      (palette) => palette.id === this.state.updatePaletteId
    );

    // Filter paletted which are NOT updated
    let newPalettes = this.state.palettes.filter(
      (palette) => palette.id !== this.state.updatePaletteId
    );

    // Add updated Palette to its original index
    newPalettes.splice(index, 0, newPalette);

    this.setState({
      palettes: newPalettes,
    });

    // console.log('res.data', res.data);
  };

  deletePalette = async (id) => {
    // console.log('deleting palette :', id);
    // ! Deleteing Palette from DB
    await axios.delete(`${API_URL}/${id}`);

    // console.log('res.data', res.data);

    // ~ Updating state
    this.setState({
      palettes: this.state.palettes.filter((el) => el.id !== id),
    });
    // this.setState({
    //    palettes: this.state.palettes.filter((el) => el.id !== id),
    // });
    //    () => {
    //       console.log(
    //          'saveing palettes to localstorage',
    //          this.state.palettes
    //       );
    //       this.syncLocalStorage();
    //    }

    // );
  };

  changeUpdateId = (id) => {
    this.setState({
      updatePaletteId: id,
    });
  };

  async componentDidMount() {
    try {
      const res = await axios.get(API_URL);
      // console.log(res.data.data);

      // ! Change name to paletteName
      // ! and _id to id
      // * from api data

      let palettes = res.data.data;

      palettes.forEach((palette) => {
        Object.keys(palette).forEach((key) => {
          if (key === 'name') {
            // console.log(`changing key ${key}`);
            Object.defineProperty(
              palette,
              'paletteName',
              Object.getOwnPropertyDescriptor(palette, key)
            );
            delete palette[key];
          }
          if (key === '_id') {
            // console.log(`changing key ${key}`);
            Object.defineProperty(
              palette,
              'id',
              Object.getOwnPropertyDescriptor(palette, key)
            );
            delete palette[key];
          }
        });
      });

      this.setState({
        palettes,
        fetchingFromAPI: false,
      });
    } catch (err) {
      this.setState({
        fetchingFromAPI: false,
      });
    }

    // console.log('palettes', palettes);
  }
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
                          updatePalette={false}
                          // editPalette={this.editPalette}
                          // currentPalette={this.state.palettes[0]}
                          {...routerProps}
                          palettes={this.state.palettes}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path='/updatePalette/:id'
                    render={(routerProps) => (
                      <Page className='page'>
                        <NewPalette
                          savePalette={this.savePalette}
                          updatePalette={true}
                          editPalette={this.editPalette}
                          currentPalette={this.state.palettes.find(
                            (palette) =>
                              palette.id ===
                              routerProps.match.params.id
                          )}
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
                          fetchingFromAPI={this.state.fetchingFromAPI}
                          changeUpdateId={this.changeUpdateId}
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
                          colorId={routerProps.match.params.colorId}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path='/login'
                    render={(routerProps) => (
                      <Page className='page'>
                        <Login {...routerProps} />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path='/register'
                    render={(routerProps) => (
                      <Page className='page'>
                        <Register {...routerProps} />
                      </Page>
                    )}
                  />
                  <Redirect from='*' to='/' />
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
