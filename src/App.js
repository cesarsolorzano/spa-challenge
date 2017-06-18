import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';
import CharactersList from './CharactersList';
import FavoritesList from './FavoritesList';
import CharacterPage from './CharacterPage';

import getRandomComics from './helpers/getRandomComics';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: null,
      name: '',
      orderBy: '',
      total: 0,
      offset: 0,
      favorites: {},
    };

    this.limit = 10;

    this.onSearchChange = this.onSearchChange.bind(this);
    this.displayCharacterDetails = this.displayCharacterDetails.bind(this);
    this.goBack = this.goBack.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeOrderBy = this.changeOrderBy.bind(this);
    this.updateTotalAndCount = this.updateTotalAndCount.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
    this.deleteComic = this.deleteComic.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
    this.addRandomComics = this.addRandomComics.bind(this);
  }
  
  onSearchChange(event) {
    this.setState({ name: event.target.value, offset: 0, character: null });
  }

  displayCharacterDetails(character) {
    this.setState({ character });
  }

  changePage(page) {
    const offset = (page - 1) * this.limit;
    if (page > 0 && offset < this.state.total) {
      this.setState({ offset });
    }
  }

  changeOrderBy(event) {
    const orderBy = event.target.value ? event.target.value : null;
    this.setState({ orderBy });
  }

  goBack() {
    this.setState({ character: null });
  }

  updateTotalAndCount(total, count ) {
    this.setState({ total, count });
  }

  addToFavorite(comic) {
    const favorites = Object.assign({}, this.state.favorites);
    if (!favorites.hasOwnProperty(comic.id)) {
      favorites[comic.id] = comic;
      this.setState({ favorites });
    }
  }

  isFavorite(comicId) {
    const favorites = Object.assign({}, this.state.favorites);
    return favorites.hasOwnProperty(comicId);
  }

  deleteComic(comicId) {
    const favorites = Object.assign({}, this.state.favorites);
    delete favorites[comicId];
    this.setState({ favorites });
  }

  addRandomComics(comics) {
    const favorites = Object.assign({}, this.state.favorites);
    const randomComics = getRandomComics(comics, favorites);

    randomComics.forEach(comic => {
      favorites[comic.id] = comic;
    });

    this.setState({ favorites });
  }

  componentDidMount() {
    if (localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({ favorites });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    }
  }

  render() {
    return (
      <div className="app">
        <Header name={this.state.name} onSearchChange={this.onSearchChange} />
        <div className="content">
          <div className="characters-content">
            {
              !this.state.character &&
              <CharactersList
                limit={this.limit}
                offset={this.state.offset}
                orderBy={this.state.orderBy}
                total={this.state.total}
                count={this.state.count}
                name={this.state.name}
                changePage={this.changePage}
                changeOrderBy={this.changeOrderBy}
                displayCharacterDetails={this.displayCharacterDetails}
                updateTotalAndCount={this.updateTotalAndCount}
              />
            }
            {
              this.state.character &&
              <CharacterPage
                key={this.state.character.id}
                character={this.state.character}
                goBack={this.goBack}
                addToFavorite={this.addToFavorite}
                isFavorite={this.isFavorite}
                addRandomComics={this.addRandomComics}
              />
            }
          </div>
          <div className="favorites-content">
            <FavoritesList favorites={this.state.favorites} deleteComic={this.deleteComic} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
