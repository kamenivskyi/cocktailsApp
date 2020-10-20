import React from 'react';

import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';
import formatCategory from '../utils/formatCategory'
import useAsyncData from '../hooks/useAsyncData';

const CategoryDrinksContainer = ({ match }) => {

  const formatedCategory = formatCategory(match.params.name, '_', '/');
  const { getCategoryDrinks } = CocktailService;
  const { data, loading } = useAsyncData(getCategoryDrinks, formatedCategory);

  return (
    <ErrorBoundary>
      <DrinksList items={data} loading={loading} />
    </ErrorBoundary>
  );
}

export default CategoryDrinksContainer;
