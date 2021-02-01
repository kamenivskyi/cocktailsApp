import React from 'react';
import PropTypes from 'prop-types';

import DrinklItem from './DrinkItem';
import { withSpinner } from 'hocs';
import { drinkViewShape } from 'utils/commonPropTypes';

const DrinksList = ({ items }) => (
  <div className='row'>
    {items && items.map((item) => <DrinklItem item={item} key={item.name} />)}
  </div>
);

DrinksList.propTypes = {
  drinks: PropTypes.arrayOf(drinkViewShape),
};

const DrinksListWithSpinner = withSpinner(DrinksList);

export default DrinksListWithSpinner;
