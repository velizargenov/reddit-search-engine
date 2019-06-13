import React, { Component, Fragment  } from 'react';

import './App.css';
import Search from '../Search/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('state: ', this.state.value);
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
