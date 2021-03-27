import React from 'react';

import DrinksList from 'components/drinks/DrinksList';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import drinksService from 'services/DrinksService';
import useAsyncData from 'hooks/useAsyncData';

const CategoryDrinksPage = ({ match }) => {
  const formattedCategory = match.params.name.replaceAll('_', '/');
  const { data, error, loading } = useAsyncData(
    drinksService.getCategoryDrinks,
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
