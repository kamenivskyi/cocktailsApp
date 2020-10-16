import React, { useEffect, useState } from 'react';

import DrinkView from '../components/drinks/DrinkView';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';

const DrinkContainer = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const { getDrinkById } = CocktailService;
    let cancelled = false;

    const onMoreDetails = id => {
      getDrinkById(id)
        .then(data => {
          if (!cancelled) {
            setData(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    onMoreDetails(match.params.id);

    return () => { cancelled = true };
  }, [match.params.id]);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} error={error} />
    </ErrorBoundary>
  );
}

export default DrinkContainer;
