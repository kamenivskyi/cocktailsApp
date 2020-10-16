import React from 'react';
import PropTypes from 'prop-types';

import DrinklItem from './DrinkItem';
import { withSpinner } from '../../hoc-helpers';

const DrinksList = ({ items }) => (
  <div className='row'>
    {items && items.map(item => {
      return <DrinklItem item={item} key={item.name} />;
    })}
  </div>
);

DrinksList.propTypes = {
  drinks: PropTypes.array,
};

const DrinksListWithSpinner = withSpinner(DrinksList);

export default DrinksListWithSpinner;
