import React, { useState, useEffect } from 'react';

import DrinkView from '../components/drinks/DrinkView';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';

const { getRandom } = CocktailService;

const RandomContainer = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);

    getRandom().then(data => {
      if (!cancelled) {
        setData(data);
        setLoading(false);
      }
    }).catch(error => console.log(error));

    return () => { cancelled = true };
  }, []);


  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} />
    </ErrorBoundary>
  );
};

export default RandomContainer;
