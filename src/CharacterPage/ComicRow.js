import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comic from './Comic';

class ComicRow extends Component {
  render() {
    return (
    <div className="row comic-row">
      {
        this.props.group.map(comic =>
          <Comic comic={comic} key={comic.id} displayComic={this.props.displayComic} />)
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
