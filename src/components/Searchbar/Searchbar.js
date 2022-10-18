import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSearch(value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={search}
          onChange={handleChange}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
