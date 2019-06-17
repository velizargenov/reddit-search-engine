import React, { Component, Fragment  } from 'react';

import './App.css';
import Search from '../Search/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      data: []
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

    if (value !== '') {
      this.retrieveData(value)
        .then(data => this.setState({ data }));
    }
  }

  async retrieveData (searchValue) {
    const response = await fetch(`https://www.reddit.com/r/${searchValue}.json`);
    const data = await response.json();
    return data && data.data && data.data.children;
  }

  render () {
    return (
      <Fragment>
        <Search
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

export default App;
