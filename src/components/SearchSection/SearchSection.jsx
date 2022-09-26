import React, { Component } from 'react';

import { getPosts } from '../Services/Api';

import Searchbar from 'components/Searchbar';

class SearchSection extends Component {
  state = {
    picture: [],
    value: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;

    if (page > prevState.page || value !== prevState.value) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    // this.setState({
    //   loading: true,
    // });
    const { page, value } = this.state;

    try {
      const data = await getPosts(value, page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        // loading: false,
      });
    }
  }

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}

export default SearchSection;
