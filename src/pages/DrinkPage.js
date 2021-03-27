import React from 'react';

import DrinkView from 'components/drinks/DrinkView';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import drinksService from 'services/DrinksService';
import useAsyncData from 'hooks/useAsyncData';

const DrinkPage = ({ match }) => {
  const { data, loading, error } = useAsyncData(drinksService.getDrinkById, match.params.id);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} error={error} />
    </ErrorBoundary>
  );
};

export default DrinkPage;
