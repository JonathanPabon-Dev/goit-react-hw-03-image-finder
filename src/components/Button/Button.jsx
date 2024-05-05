import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className={css.loadBtn}
          onClick={this.props.onLoadMore}
        >
          Load more
        </button>
      </>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
