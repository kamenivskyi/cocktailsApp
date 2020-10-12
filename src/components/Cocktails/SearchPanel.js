import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../layout/Button';

const SearchPanel = ({ getDrinks, generateAlert }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim()) {
      getDrinks(value);
    } else {
      generateAlert('Please enter something', 'danger');
    }

    setValue('');
  };


  return (
    <form className='form-group col-md-6' onSubmit={handleSubmit}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the name of the cocktail'
          aria-label='Search cocktails'
          onChange={handleChange}
          value={value}
        />
        <div className='input-group-append'>
          <Button className='btn btn-outline-secondary'>Search</Button>
        </div>
      </div>
    </form>
  );
}
SearchPanel.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  generateAlert: PropTypes.func.isRequired
};

export default SearchPanel;
