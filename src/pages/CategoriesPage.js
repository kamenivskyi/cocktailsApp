import React from 'react';

import drinksService from 'services/DrinksService';
import Categories from 'components/drinks/Categories';
import ErrorBoundary from 'components/helpers/ErrorBoundary';
import useAsyncData from 'hooks/useAsyncData';

const CategoriesPage = () => {
  const { data, loading } = useAsyncData(drinksService.getCategories);

  return (
    <ErrorBoundary>
      <Categories items={data} loading={loading} />
    </ErrorBoundary>
  );
};

export default CategoriesPage;
