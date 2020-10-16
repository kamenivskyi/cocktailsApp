import React, { useState, useEffect } from 'react';

import DrinksList from '../components/drinks/DrinksList';
import ErrorBoundary from '../components/helpers/ErrorBoundary';
import CocktailService from '../services/CocktailService';
import formatCategory from '../utils/formatCategory'

const CategoryDrinksContainer = ({ match }) => {
  const [drinks, setDrinks] = useState(null);
  const [loading, setLoading] = useState(true);

  const { getCategoryDrinks } = CocktailService;

  useEffect(() => {
    let cancelled = false;

    const getDrinks = category => {
      const formatedCategory = formatCategory(category, '_', '/');

      getCategoryDrinks(formatedCategory).then(items => {
        if (!cancelled) {
          setDrinks(items);
          setLoading(false);
        }
      });
    };

    getDrinks(match.params.name);

    return () => { cancelled = true };

  }, []);

  return (
    <ErrorBoundary>
      <DrinksList items={drinks} loading={loading} />
    </ErrorBoundary>
  );
}

export default CategoryDrinksContainer;
