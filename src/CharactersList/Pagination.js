import React, { Component } from 'react';
import PropTypes from 'prop-types';

import arrowLeft from '../img/icons/btn_arrow_left.png';
import arrowRight from '../img/icons/btn_arrow_right.png';


class Pagination extends Component {
  render() {
    const numbers = [];
    const totalPages = Math.ceil(this.props.total / this.props.limit);
    let currentPage = (this.props.offset / this.props.limit) === 0 ? 1 : (this.props.offset / this.props.limit) + 1;

    let firstPage = currentPage <= 2 ? 1 : currentPage - 2;
    const lastPage = Math.min(firstPage + 4, totalPages);
    firstPage = (lastPage - firstPage) < 4 ? 1 : firstPage;

    for(let i = firstPage; i <= lastPage; i += 1) {
      numbers.push(
        <li key={`page-${i}`} className={currentPage === i ? 'active' : ''}>
          <a className="clickeable" onClick={() => this.props.changePage(i)}>{i}</a>
        </li>
      );
    }

    return (
      <nav className="text-center">
        <ul className="pagination pagination-lg">
          <li className={currentPage <= 1 ? 'disabled' : ''}>
            <a className="clickeable" onClick={() => this.props.changePage(currentPage - 1)}>
              <span><img src={arrowLeft} alt="Previous" /></span>
            </a>
          </li>
          {numbers}
          <li className={currentPage >= totalPages ? 'disabled' : ''}>
            <a className="clickeable" onClick={() => this.props.changePage(currentPage + 1)}>
              <span><img src={arrowRight} alt="Next" /></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  changePage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Pagination;
