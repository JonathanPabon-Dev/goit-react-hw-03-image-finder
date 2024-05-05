import React, { Component } from 'react';
import { fetchImages, fetchMoreImages } from '../js/api';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      showModal: false,
      page: 1,
      images: [],
      queryValue: '',
      imageSelected: {},
    };
  }

  handleOnSubmit = async (ev, inputValue) => {
    ev.preventDefault();
    this.setState({
      isLoading: true,
      page: 1,
      images: [],
      queryValue: inputValue,
    });
    try {
      const imagesList = await fetchImages(inputValue, 1);
      this.setState({
        isLoading: false,
        images: imagesList,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleOnLoadMore = async () => {
    this.setState(
      prevState => ({
        isLoading: true,
        page: prevState.page + 1,
      }),
      () => {
        fetchMoreImages(this.state.queryValue, this.state.page)
          .then(newImages => {
            this.setState({
              isLoading: false,
              images: [...this.state.images, ...newImages],
            });
          })
          .catch(error => {
            this.setState({
              isLoading: false,
            });
          });
      }
    );
  };

  handleOnImgClick = ev => {
    ev.preventDefault();
    if (ev.target.tagName === 'IMG') {
      const imageData = { src: ev.target.src, alt: ev.target.alt };
      this.setState({ showModal: true, selectedImage: imageData });
    }
  };

  handleOnCloseModal = () => {
    this.setState({ showModal: false, selectedImage: {} });
  };

  render() {
    return (
      <div className="app">
        <Searchbar
          onSubmitForm={(ev, inputValue) => this.handleOnSubmit(ev, inputValue)}
        />
        {this.state.images.length > 0 ? (
          <>
            <ImageGallery
              imagesList={this.state.images}
              onImgClick={ev => this.handleOnImgClick(ev)}
            />
            <Button onLoadMore={this.handleOnLoadMore} />
          </>
        ) : (
          <p className="noResults">No results found. Try another searching.</p>
        )}
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <Modal
            image={this.state.selectedImage}
            onCloseModal={this.handleOnCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
