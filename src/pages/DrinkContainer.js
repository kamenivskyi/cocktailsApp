import React, { useEffect, useState } from 'react';

import DrinkView from '../components/drinks/DrinkView';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';

const DrinkContainer = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { getDrinkById } = CocktailService;

  useEffect(() => {
    let cancelled = false;

    const onMoreDetails = id => {
      getDrinkById(id)
        .then(data => {
          if (!cancelled) {
            setData(data);
            setLoading(false);
          }
        })
        .catch((error) => setError(error));
    };

    onMoreDetails(match.params.id);

    return () => { cancelled = true };
  }, []);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} />
    </ErrorBoundary>
  );
}

export default DrinkContainer;
