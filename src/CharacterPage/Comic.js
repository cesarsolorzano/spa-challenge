import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imageNotAvailable from '../img/image_not_available.jpg'

class Comic extends Component {
  render() {
    const image = this.props.comic.images.length > 0 ? this.props.comic.images[0]  : null;
    const imagePath = image ? `${image.path}.${image.extension}` : imageNotAvailable;

    return (
      <div className="col-md-2">
        <a className="clickeable" onClick={this.props.onClick}>
          <img src={imagePath} className="img img-responsive" alt={this.props.comic.title} />
          <p>{this.props.comic.title}</p>
        </a>
      </div>
    );
  }
}


Comic.propTypes = {
  comic: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Comic;
