import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, term }) => {
  const handleChange = ({ target: { value } }) => {
    onFilterChange(value);
  };

  return (
    <div className='form-group col-md-6'>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Type the name of the drink to filter'
          onChange={handleChange}
          value={term}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
