import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const Search = ({ handleSubmit, handleChange, value }) => (
  <form className='search' onSubmit={handleSubmit}>
    <div>
      <input type="text" placeholder="Search..." value={value} onChange={handleChange} />
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  </form>
)

Search.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

export default Search;
