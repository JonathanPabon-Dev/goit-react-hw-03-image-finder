import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <ThreeDots
          height="100"
          width="100"
          color="#313b70"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }
}

export default Loader;
