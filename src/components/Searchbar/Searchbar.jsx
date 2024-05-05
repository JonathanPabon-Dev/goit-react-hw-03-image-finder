import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form
            className={css.form}
            onSubmit={e => this.props.onSubmitForm(e, this.inputValue.value)}
          >
            <button type="submit" className={css.button}>
              <i className="bi bi-search"></i>
            </button>

            <input
              ref={input => (this.inputValue = input)}
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              required
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
