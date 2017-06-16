import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comic from './Comic';

class ComicRow extends Component {
  render() {
    return (
    <div className="row comic-row">
      {
        this.props.group.map(comic => <Comic comic={comic} key={comic.id} />)
      }
    </div>
    );
  }
}

ComicRow.propTypes = {
  group: PropTypes.array.isRequired,
};

export default ComicRow;
