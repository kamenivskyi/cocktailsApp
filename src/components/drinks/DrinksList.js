import React from 'react';
import PropTypes from 'prop-types';

import DrinklItem from './DrinkItem';
import { withSpinner } from '../../hocs';
import { drinkViewPropTypes } from '../../utils/props-types/drinkViewPropTypes';

const DrinksList = ({ items }) =>  {
  console.log('drinks list render');
  
  return (
    <div className='row'>
      {items && items.map(item => <DrinklItem item={item} key={item.name} />)}
    </div>
  );
}

DrinksList.propTypes = {
  drinks: PropTypes.arrayOf(drinkViewPropTypes),
};

const DrinksListWithSpinner = withSpinner(DrinksList);

export default DrinksListWithSpinner;
