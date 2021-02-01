import React from 'react';

import DrinksList from 'components/drinks/DrinksList';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import CocktailService from 'services/CocktailService';
import useAsyncData from 'hooks/useAsyncData';

const { getCategoryDrinks } = CocktailService;

const CategoryDrinksPage = ({ match }) => {
  const formattedCategory = match.params.name.replaceAll('_', '/');
  const { data, error, loading } = useAsyncData(
    getCategoryDrinks,
    formattedCategory
  );

  return (
    <ErrorBoundary>
      <DrinksList items={data} loading={loading} />
      {error && <p className='text-center'>Something went wrong!</p>}
    </ErrorBoundary>
  );
};

export default CategoryDrinksPage;
