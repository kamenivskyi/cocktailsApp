import React from 'react';

import CocktailService from '../services/CocktailService';
import Categories from '../components/drinks/Categories';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import useAsyncData from '../hooks/useAsyncData';

const CategoriesContainer = () => {

  const { getCategories } = CocktailService;
  const { data, loading } = useAsyncData(getCategories);

  return (
    <ErrorBoundary>
      <Categories items={data} loading={loading} />
    </ErrorBoundary>
  );
}

export default CategoriesContainer;
