import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery';
import { getPosts } from '../Services/Api';
// import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class SearchSection extends Component {
  state = {
    pictures: [],
    value: '',
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    modalUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;

    if (page > prevState.page || value !== prevState.value) {
      this.fetchPosts();
    }
    // if (pictures.length === 0) {
    //   return Notiflix.Notify.failure('Enter your search query');
    // }
  }

  async fetchPosts() {
    this.setState({
      loading: true,
    });

    const { page, value } = this.state;

    try {
      const data = await getPosts(value, page);
      this.setState(({ pictures }) => {
        // console.log(data.hits);
        return {
          pictures: [...pictures, ...data.hits],
        };
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  openModal = largeImageURL => {
    this.setState(() => ({
      showModal: true,
      modalUrl: largeImageURL,
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      showModal: false,
      modalUrl: '',
    }));
  };

  onFormSubmit = value => {
    this.setState({ value, pictures: [] });
  };

  render() {
    const { pictures, loading, error, showModal, modalUrl } = this.state;
    const { onFormSubmit, openModal, closeModal } = this;
    // console.log(pictures);
    return (
      <>
        <Searchbar onSubmit={onFormSubmit} />

        {pictures.length > 0 && (
          <ImageGallery pictures={pictures} onClick={openModal} />
        )}
        {loading && <Loader />}
        {error && <h2>Oops, something went wrong...</h2>}

        {showModal && <Modal modalImg={modalUrl} onClose={closeModal} />}
      </>
    );
  }
}

export default SearchSection;
