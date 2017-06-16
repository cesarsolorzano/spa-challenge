import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="content-title">
          <a className="clickeable" onClick={this.props.goBack}>
            <h4>
              <span className="glyphicon glyphicon-arrow-left"></span> 
              Return to characters
            </h4>
          </a>
        </div>
        <div
          className="character-background"
          style={{backgroundImage: `url(${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension})`}}
        >
          <div className="background-dark"></div>
          <div className="character-header">
            <h1>{this.props.character.name}</h1>
            <h4>{this.props.character.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  character: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Header;