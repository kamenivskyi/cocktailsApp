import React, { useState } from 'react';

import SearchPanel from '../components/drinks/SearchPanel';
import Filter from '../components/drinks/Filter';
import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';
import { useFilterDrinks, useAsyncData } from '../hooks';
import Alert from '../components/layout/Alert';

const Home = () => {
  const [term, setTerm] = useState('');
  const [alert, setAlert] = useState(null);
  const { getDrinksByName } = CocktailService;
  const DEFAULT_DRINK_NAME = 'martini';
  const { data, loading, error, doFetch } = useAsyncData(getDrinksByName, DEFAULT_DRINK_NAME);
  const visibleDrinks = useFilterDrinks(data, term);

  const onFilterChange = (term) => setTerm(term);

  const generateAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000);
  };

  const noData = !loading && !visibleDrinks;

  return (
    <ErrorBoundary>
      <Alert alert={alert} />
      <div className='form-row'>
        <SearchPanel getDrinks={doFetch} generateAlert={generateAlert} />
        <Filter onFilterChange={onFilterChange} />
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
