import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CharacterItem extends Component {
  render() {
    return (
      <div className="row character-item">
        <div className="col-xs-4">
          <img
            src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`} 
            className="img-responsive img-circle"
            alt={this.props.name}
          />
        </div>
        <div className="col-xs-8">
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
          <button className="btn btn-more">View more</button>
        </div>
      </div>
    );
  }
}


CharacterItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.object,
};

export default CharacterItem;
