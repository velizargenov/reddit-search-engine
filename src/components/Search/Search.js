import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const Search = ({ handleSubmit, handleChange, value }) => (
  <form className='search' onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={handleChange} />
    <input type="submit" value="Search" />
  </form>
)

Search.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default Search;
