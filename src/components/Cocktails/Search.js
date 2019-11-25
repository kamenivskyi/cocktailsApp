import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    value: ''
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    const { value } = this.state;
    const { searchDrinks, setAlert } = this.props;

    event.preventDefault();
    value.trim().length > 0
      ? searchDrinks(value)
      : setAlert('Please type something', 'danger');
    this.setState({ value: '' });
  };

  render() {
    return (
      <form className='form-group col-md-6' onSubmit={this.handleSubmit}>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Type the name of the cocktail'
            aria-label='Search cocktails'
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button'>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
Search.propTypes = {
  searchDrinks: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
