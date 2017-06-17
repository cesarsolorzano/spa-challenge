import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { apikey, hash, apiPath } from '../config';
import Header from './Header';
import ComicRow from './ComicRow';
import ComicModal from './ComicModal';


class CharacterPage extends Component {
 constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comics: [],
      showModal: false,
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
    this.setState({ comic, showModal: true });
  }

  closeModel() {
    this.setState({ showModal: false });
  }

  render() {
    const hasComics = this.state.comics.length > 0;
    const comics = this.state.comics.reduce((acc, val, index) => {
      if (index % 6 === 0) {
        acc.push([val]);
      } else {
        acc[acc.length - 1].push(val);
      }
      return acc;
    }, []);

    return (
      <div>
        <Header character={this.props.character} goBack={this.props.goBack} />
        {
          this.state.loading &&
          <h4 className="text-center">Loading...</h4>
        }
        {
          hasComics && <h2>Comics</h2>
        }
        {
          !this.state.loading &&
          comics.map((group, index) =>
            <ComicRow
              group={group}
              key={`comic-${this.props.character.id}-group-${index}`}
              displayComic={this.displayComic}
            />)
        }
        <ComicModal
          showModal={this.state.showModal}
          comic={this.state.comic}
          closeModel={this.closeModel}
          addToFavorite={this.props.addToFavorite}
          isFavorite={this.props.isFavorite}
        />
      </div>
    );
  }
}


CharacterPage.propTypes = {
  character: PropTypes.object.isRequired,
  goBack: PropTypes.func,
  addToFavorite: PropTypes.func,
  isFavorite: PropTypes.func,
};

export default CharacterPage;
