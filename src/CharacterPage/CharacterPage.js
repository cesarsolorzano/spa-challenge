import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ComicRow from './ComicRow';
import ComicModal from './ComicModal';


class CharacterPage extends Component {
  render() {
    const hasComics = this.props.comics.length > 0;
    const comics = this.props.comics.reduce((acc, val, index) => {
      if (index % 6 === 0) {
        acc.push([val]);
      } else {
        acc[acc.length - 1].push(val);
      }
      return acc;
    }, []);

    return (
      <div>
        <Header
          character={this.props.character}
          goBack={this.props.goBack}
          hasComics={hasComics}
          addRandomComics={() => this.props.addRandomComics(this.props.comics)}
        />
        {
          this.props.loading &&
          <h4 className="text-center">Loading...</h4>
        }
        {
          hasComics && <h2>Comics</h2>
        }
        {
          !this.props.loading &&
          comics.map((group, index) =>
            <ComicRow
              group={group}
              key={`comic-${this.props.character.id}-group-${index}`}
              displayComic={this.props.displayComic}
            />)
        }
        <ComicModal
          showModal={this.props.showComic}
          comic={this.props.currentComic}
          closeModel={this.props.closeComic}
          addToFavorite={this.props.addToFavorite}
          isFavorite={this.props.isFavorite}
        />
      </div>
    );
  }
}

CharacterPage.propTypes = {
  loading: PropTypes.bool,
  character: PropTypes.object.isRequired,
  currentComic: PropTypes.object,
  comics: PropTypes.array,
  goBack: PropTypes.func,
  addToFavorite: PropTypes.func,
  isFavorite: PropTypes.func,
  addRandomComics: PropTypes.func,
  showComic: PropTypes.bool,
  displayComic: PropTypes.func,
  closeComic: PropTypes.func,
};

export default CharacterPage;
