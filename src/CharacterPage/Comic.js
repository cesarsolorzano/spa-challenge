import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getImage from '../helpers/getImage';

class Comic extends Component {
  render() {
    const thumbnail = getImage(this.props.comic.images);

    return (
      <a className="clickeable" onClick={() => this.props.displayComic(this.props.comic)}>
        <img src={thumbnail} className="img img-responsive" alt={this.props.comic.title} />
        <p>{this.props.comic.title}</p>
      </a>
    );
  }
}


Comic.propTypes = {
  comic: PropTypes.object.isRequired,
  displayComic: PropTypes.func,
};

export default Comic;
