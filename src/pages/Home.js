import React, { useState } from 'react';

import Alert from '../components/layout/Alert';
import SearchPanel from '../components/drinks/SearchPanel';
import Filter from '../components/drinks/Filter';
import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';
import { useFilterDrinks, useAsyncData, useAlert } from '../hooks';
import { config } from '../config';

const Home = () => {
  const [term, setTerm] = useState('');
  const [alert, generateAlert] = useAlert(null);
  const { getDrinksByName } = CocktailService;
  const { data, loading, doFetch } = useAsyncData(getDrinksByName, config.pages.home.DEFAULT_DRINK_NAME);
  const visibleDrinks = useFilterDrinks(data, term);

  const noData = !loading && !visibleDrinks;

  return (
    <ErrorBoundary>
      <Alert alert={alert} />
      <div className='form-row'>
        <SearchPanel getDrinks={doFetch} generateAlert={generateAlert} />
        <Filter onFilterChange={setTerm} />
      </div>

      {noData ? (
        <p className='text-center' style={{ fontSize: '1.5rem' }}>
          Drinks not found
        </p>
      ) : (
          <DrinksList items={visibleDrinks} loading={loading} />
        )}
    </ErrorBoundary>
  );
};


export default Home;
