import React, { useState } from 'react';

import SearchPanel from '../components/drinks/SearchPanel';
import Filter from '../components/drinks/Filter';
import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';

import CocktailService from '../services/CocktailService';
import useAsyncData from '../hooks/useAsyncData';
import Alert from '../components/layout/Alert';

const Home = () => {
  const [term, setTerm] = useState('');
  const [alert, setAlert] = useState(null);

  const DEFAULT_DRINK_NAME = 'martini';
  const { getDrinksByName } = CocktailService;
  const { data, loading, error, doFetch } = useAsyncData(getDrinksByName, DEFAULT_DRINK_NAME);

  const onFilterChange = (term) => setTerm(term);

  const filterCocktails = (items, term) => {
    if (!term.length) {
      return items;
    }

    const visibleItems = items ? items.filter(({ name }) => {
      return name.toLowerCase().includes(term.toLowerCase());
    }) : items;

    return visibleItems;
  };


  const generateAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000);
  };

  const visibleItems = filterCocktails(data, term);

  const noData = !loading && !visibleItems;

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
          <DrinksList items={visibleItems} loading={loading} />
        )}
    </ErrorBoundary>
  );
};


export default Home;
