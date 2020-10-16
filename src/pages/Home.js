import React from 'react';

import SearchPanel from '../components/drinks/SearchPanel';
import Filter from '../components/drinks/Filter';
import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';

const Home = ({ getDrinks, generateAlert, onFilterChange, ...restProps }) => (
  <ErrorBoundary>
    <div className='form-row'>
      <SearchPanel getDrinks={getDrinks} generateAlert={generateAlert} />
      <Filter onFilterChange={onFilterChange} />
    </div>
    <DrinksList {...restProps} />
  </ErrorBoundary>
);

export default Home;
