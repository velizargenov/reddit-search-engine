import React, { Component, Fragment  } from 'react';

import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import './App.css';
import Search from '../Search/Search';
import PostsList from '../PostsList/PostsList';

const override = css`
  position: absolute;
  top: 100px;
  margin-left: 50%;
  display: block;
  margin: 0 auto;
  left: 50%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      data: [],
      loading: false
    }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const { value } = this.state;
    this.setState({
      data: [],
      loading: true
    })

    if (value !== '') {
      this.retrieveData(value)
        .then(data => this.setState({ data, loading: false }));
    }
  }

  async retrieveData (searchValue) {
    const response = await fetch(`https://www.reddit.com/r/${searchValue}.json`);
    const data = await response.json();

    return data && data.data && data.data.children;
  }

  render () {
    return (
      <div className="wrapper">
        <Search
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <PostsList posts={this.state.data} />
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default App;
