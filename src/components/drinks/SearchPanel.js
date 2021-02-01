import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/layout/Button';
import CocktailService from 'services/CocktailService';
import { alertText } from 'config';

const { getDrinksByName } = CocktailService;

const SearchPanel = ({ getDrinks, generateAlert }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      getDrinks(getDrinksByName, value);
      setValue('');
    } else {
      generateAlert(alertText, 'warning');
    }
  };

  return (
    <form className='form-group col-md-6' onSubmit={handleSubmit}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the name of drink'
          aria-label='Search cocktails'
          onChange={handleChange}
          value={value}
        />
        <div className='input-group-append'>
          <Button type='submit' className='btn btn-outline-primary btn-sm'>
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};
SearchPanel.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  generateAlert: PropTypes.func.isRequired,
};

export default React.memo(SearchPanel);
