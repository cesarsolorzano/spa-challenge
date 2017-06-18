import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comic from './Comic';

class ComicRow extends Component {
  render() {
    return (
    <div className="row comic-row">
      {
        this.props.group.map(comic => (
          <div className="col-md-2" key={comic.id}>
            <Comic comic={comic} displayComic={this.props.displayComic} />
          </div>
        ))
      }
    </div>
    );
  }
}

ComicRow.propTypes = {
  group: PropTypes.array.isRequired,
  displayComic: PropTypes.func.isRequired,
};

export default ComicRow;
