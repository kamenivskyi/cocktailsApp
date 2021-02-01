import React from 'react';

import DrinkView from 'components/drinks/DrinkView';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import CocktailService from 'services/CocktailService';
import useAsyncData from 'hooks/useAsyncData';

const { getDrinkById } = CocktailService;

const DrinkPage = ({ match }) => {
  const { data, loading, error } = useAsyncData(getDrinkById, match.params.id);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} error={error} />
    </ErrorBoundary>
  );
};

export default DrinkPage;
