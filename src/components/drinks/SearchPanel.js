import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchPanelView from "./SearchPanelView";

import drinksService from 'services/DrinksService';
import { alertText } from 'config';

const SearchPanel = ({ getDrinks, generateAlert }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      getDrinks(drinksService.getDrinksByName, value);
      setValue('');
    } else {
      generateAlert(alertText, 'warning');
    }
  };

  return (
    <SearchPanelView handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
  );
};
SearchPanel.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  generateAlert: PropTypes.func.isRequired,
};

export default React.memo(SearchPanel);