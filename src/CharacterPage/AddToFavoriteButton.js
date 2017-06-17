
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import favoriteDefaultIcon from '../img/icons/btn-favourites-default.png';
import favoritePrimaryIcon from '../img/icons/btn-favourites-primary.png';

class AddToFavoriteButton extends Component {
  render() {
    const icon = this.props.added ? favoritePrimaryIcon : favoriteDefaultIcon;
    const message = this.props.added ? 'Added to favorites' : 'Add to favorite';
    const css = this.props.added ? 'favorite-btn added' : 'favorite-btn';

    return (
      <div className={css} onClick={this.props.onClick}>
        <img src={icon} alt={message} />
        <span className="message">{message}</span>
      </div>
    );
  }
}

AddToFavoriteButton.propTypes = {
  added: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AddToFavoriteButton;
