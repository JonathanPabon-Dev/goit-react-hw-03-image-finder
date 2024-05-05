import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <>
        <li className={css.galleryItem}>
          <img
            src={this.props.image.webformatURL}
            alt={this.props.image.id}
            className={css.galleryImg}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
