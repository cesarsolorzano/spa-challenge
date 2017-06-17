import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getImage from '../helpers/getImage';

import deleteIcon from '../img/icons/btn-delete.png';

class Comic extends Component {
  render() {
    const thumbnail = getImage(this.props.comic.images);

    return (
      <div className="favorite-comic-item">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="delete-btn" onClick={() => this.props.deleteComic(this.props.comic.id)}>
              <img src={deleteIcon} alt="Delete" />
            </div>
            <img src={thumbnail} className="img img-responsive" alt={this.props.comic.title} />
          </div>
        </div>
        <h4>{this.props.comic.title}</h4>
      </div>
    );
  }
}


Comic.propTypes = {
  comic: PropTypes.object.isRequired,
  deleteComic: PropTypes.func,
};

export default Comic;
