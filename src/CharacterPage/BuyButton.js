import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shoppingCartIcon from '../img/icons/shopping-cart-primary.png';

class BuyButton extends Component {
  render() {
    return (
      <div className="buy-btn">
          <img src={shoppingCartIcon} alt="Buy" />
          <span className="message">Buy for ${this.props.price}</span>
      </div>
    );
  }
}

BuyButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default BuyButton;
