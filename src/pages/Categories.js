import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import CocktailService from '../services/CocktailService';
import formatCategory from '../utils/formatCategory';

const Categories = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const { getCategories } = CocktailService;

  useEffect(() => {
    let cancelled = false;

    const generateCategories = () => {
      getCategories()
        .then(items => {
          if (!cancelled) {
            setItems(items);
            setLoading(false)
          }
        })
        .catch(onError);
    };

    generateCategories();

    return () => { cancelled = true };
  }, [])

  const onError = (error) => console.log(error);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='list-group'>
      {items && items.map(({ strCategory }) => {
        const category = formatCategory(strCategory, '/', '_');

        return (
          <Link
            to={`/category/${category}`}
            className='list-group-item list-group-item-action'
            key={strCategory}
          >
            {strCategory}
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
