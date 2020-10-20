import React from 'react';

import SearchPanel from '../components/drinks/SearchPanel';
import Filter from '../components/drinks/Filter';
import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';

const Home = ({
  getDrinks,
  generateAlert,
  onFilterChange,
  items,
  loading,
}) => {
  const noData = !loading && !items;

  return (
    <ErrorBoundary>
      <div className='form-row'>
        <SearchPanel getDrinks={getDrinks} generateAlert={generateAlert} />
        <Filter onFilterChange={onFilterChange} />
      </div>

      {noData ? (
        <p className='text-center' style={{ fontSize: '1.5rem' }}>
          Drinks not found
        </p>
      ) : (
          <DrinksList items={items} loading={loading} />
        )}
    </ErrorBoundary>
  );
}

export default Home;
