import React, { Component } from 'react';
import PropTypes from 'prop-types';

import charactersIcon from '../img/icons/characters.png';
import CharacterItem from './CharacterItem';

class CharactersList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <div className="content-title">
              <img src={charactersIcon} className="pull-left icon" alt="Favorites" />
              <h2>Characters</h2>
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-control input-lg sort-by"
              onChange={this.props.changeOrderBy}
              value={this.props.orderBy}
            >
              <option value="">Sort by</option>
              <option value="name">Name (A-Z)</option>
              <option value="-name">Name (Z-A)</option>
              <option value="-modified">First modified</option>
              <option value="modified">Last modified</option>
            </select>
          </div>
        </div>
        {
          this.props.loading &&
          <h4 className="text-center">Loading...</h4>
        }
        {
          !this.props.loading && !this.props.characters &&
          <h4 className="text-center">No characters were found</h4>
        }
        {
          !this.props.loading &&
          this.props.characters.map((pair, index) => {
            return (
              <div className="row" key={`row-${index}`}>
                { pair.map(character =>
                  <div className="col-md-6" key={character.id}>
                    <CharacterItem
                      character={character}
                      displayCharacterDetails={this.props.displayCharacterDetails}
                    />
                  </div>)}
              </div>
            );
          })
        }
      </div>
    );
  }
}

CharactersList.propTypes = {
  loading: PropTypes.bool,
  orderBy: PropTypes.string,
  characters: PropTypes.array,
  displayCharacterDetails: PropTypes.func.isRequired,
  changeOrderBy: PropTypes.func.isRequired,
};

export default CharactersList;
