import React, { Component } from 'react';
import marvelLogo from './img/marvel-logo.png';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 text-center">
              <img src={marvelLogo} alt="logo" height="50" className="logo" />
            </div>
            <div className="col-md-6 col-md-offset-1 col-xs-12">
              <input
                type="text"
                className="form-control input-lg search-input"
                placeholder="Search character..."
                value={this.props.name}
                onChange={this.props.onSearchChange}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
