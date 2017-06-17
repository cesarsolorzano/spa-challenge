import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comic from './Comic';

import favoriteIcon from '../img/icons/favourites.png';

class FavoritesList extends Component {
  render() {
    const favoritesId = Object.keys(this.props.favorites);
    return (
      <div id="favorites">
        <div className="content-title">
          <img src={favoriteIcon} className="pull-left icon" alt="Favorites" />
          <h2>My Favorites</h2>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {
              favoritesId.map(id =>
                <Comic
                  key={`favorite-${id}`}
                  comic={this.props.favorites[id]}
                  deleteComic={this.props.deleteComic}
                />)
            }
          </div>
        </div>
      </div>
    );
  }
}

FavoritesList.propTypes = {
  favorites: PropTypes.object,
  deleteComic: PropTypes.func,
};

export default FavoritesList;
