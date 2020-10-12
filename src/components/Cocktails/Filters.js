import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filters = ({ onFilterChange }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onFilterChange(value)
  }

  return (
    <div className='form-group col-md-6'>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Filter cocktails by name'
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default Filters;










