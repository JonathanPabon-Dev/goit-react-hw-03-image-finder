import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.overlay = null;

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  }

  handleClickOutside(e) {
    if (e.target === this.overlay) {
      this.props.onCloseModal();
    }
  }

  render() {
    return (
      <>
        <div
          ref={overlay => (this.overlay = overlay)}
          className={css.overlay}
          onClick={this.handleClickOutside}
        >
          <div className={css.modal}>
            <img src={this.props.image.src} alt={this.props.image.alt} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Modal;
