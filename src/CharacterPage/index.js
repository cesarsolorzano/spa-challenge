import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { apikey, hash, apiPath } from '../config';
import CharacterPage from './CharacterPage';

class CharacterPageContainer extends Component {
 constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comics: [],
      showComic: false,
      comic: {},
    };

    this.displayComic = this.displayComic.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }

  componentDidMount() {
    const ts = '1';
    return axios.get(`${apiPath}/public/characters/${this.props.character.id}/comics`, {
      params: { ts, apikey, hash, limit: 100 }
    }).then(res => {
      const comics = res.data.data.results;
        this.setState({ comics, loading: false });
      });
  }

  displayComic(comic) {
    this.setState({ comic, showComic: true });
  }

  closeModel() {
    this.setState({ showComic: false });
  }

  render() {
    return (
      <CharacterPage
        loading={this.state.loading}
        character={this.props.character}
        comics={this.state.comics}
        goBack={this.props.goBack}
        addToFavorite={this.props.addToFavorite}
        isFavorite={this.props.isFavorite}
        addRandomComics={this.props.addRandomComics}
        showComic={this.state.showComic}
        currentComic={this.state.comic}
        displayComic={this.displayComic}
        closeComic={this.closeModel}
      />
    );
  }
}

CharacterPageContainer.propTypes = {
  character: PropTypes.object.isRequired,
  goBack: PropTypes.func,
  addToFavorite: PropTypes.func,
  isFavorite: PropTypes.func,
  addRandomComics: PropTypes.func,
};

export default CharacterPageContainer;
