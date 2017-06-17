import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getThumbnail from '../helpers/getThumbnail';

class CharacterItem extends Component {
  render() {
    const comics = this.props.character.comics.items.slice(0, 4);
    const hasComics = comics.length > 0;
    const thumbnail = getThumbnail(this.props.character.thumbnail.path,
      this.props.character.thumbnail.extension);

    return (
      <div className="character-item">
        <div className="row main-content">
          <div className="col-xs-5">
            <div
              className="image"
              style={{backgroundImage: `url(${thumbnail})`}}
            ></div>
          </div>
          <div className="col-xs-7">
            <h4 className="title">{this.props.character.name}</h4>
            <p>{this.props.character.description}</p>
            <button
              className="btn btn-more"
              onClick={() => this.props.displayCharacterDetails(this.props.character)}
            >
              View more
            </button>
          </div>
        </div>
        {
          hasComics &&
          <div className="row related-comics">
          <div className="col-xs-12">
            <h4 className="title">Related comics</h4>
            <div className="row">
            {
              comics.map(comic => (
                <div key={comic.resourceURI} className="col-md-6">
                  {comic.name}
                </div>
              ))
            }
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
  displayCharacterDetails: PropTypes.func.isRequired,
};

export default CharacterItem;
