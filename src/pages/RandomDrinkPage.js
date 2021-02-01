import React from 'react';

import DrinkView from 'components/drinks/DrinkView';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import CocktailService from 'services/CocktailService';
import useAsyncData from 'hooks/useAsyncData';

const { getRandom } = CocktailService;

const RandomDrinkPage = () => {
  const { data, loading } = useAsyncData(getRandom);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} />
    </ErrorBoundary>
  );
};

export default RandomDrinkPage;
