import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import BuyButton from './BuyButton';
import AddToFavoriteButton from './AddToFavoriteButton';
import getImage from '../helpers/getImage';

import closeIcon from '../img/icons/btn-close.png'

class ComicModal extends Component {
  render() {
    const isAdded = this.props.isFavorite(this.props.comic.id);
    const thumbnail = getImage(this.props.comic.images) ;

    return (
        <Modal show={this.props.showModal} onHide={this.props.closeModel} dialogClassName="modal-comic">
          <Modal.Body>
            <div>
              <img
                src={closeIcon}
                alt="close"
                onClick={this.props.closeModel}
                className="pull-right clickeable" />
            </div>
            <div className="row comic-content">
              <div className="col-xs-5">
                <img
                  src={thumbnail}
                  alt={this.props.comic.title}
                  className="img-responsive"
                />
              </div>
              <div className="col-xs-7">
                <h3 className="title">{this.props.comic.title}</h3>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: this.props.comic.description}}
                ></div>
              </div>
            </div>
            <div className="row comic-buttons">
              <div className="col-xs-6">
                <AddToFavoriteButton
                  added={isAdded}
                  onClick={() => this.props.addToFavorite(this.props.comic)}
                />
              </div>
              <div className="col-xs-6">
                {
                  this.props.comic.prices &&
                  <BuyButton price={this.props.comic.prices[0].price} />
                }
              </div>
            </div>
          </Modal.Body>
        </Modal>
    );
  }
}

ComicModal.propTypes = {
  comic: PropTypes.object,
  showModal: PropTypes.bool,
  closeModel: PropTypes.func,
  addToFavorite: PropTypes.func,
  isFavorite: PropTypes.func,
};

export default ComicModal;
