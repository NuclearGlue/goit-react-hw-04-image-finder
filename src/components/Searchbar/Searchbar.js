import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;

    this.props.onSubmit(search);
    this.reset();
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      search: value,
    });
  };

  reset = () => {
    this.setState({
      search: '',
    });
  };

  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;

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
  }
}
