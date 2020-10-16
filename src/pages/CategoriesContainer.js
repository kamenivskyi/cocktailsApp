import React, { useState, useEffect } from 'react';

import CocktailService from '../services/CocktailService';
import Categories from '../components/drinks/Categories';
import ErrorBoundary from '../components/helpers/ErrorBoundary';

const CategoriesContainer = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const { getCategories } = CocktailService;
    let cancelled = false;

    setLoading(true);

    const generateCategories = () => {
      getCategories()
        .then(items => {
          if (!cancelled) {
            setItems(items);
            setLoading(false)
          }
        })
        .catch(handleError);
    };

    generateCategories();

    return () => { cancelled = true };
  }, []);

  const handleError = (error) => console.log(error);

  return (
    <ErrorBoundary>
      <Categories items={items} loading={loading} />
    </ErrorBoundary>
  );
}

export default CategoriesContainer;
