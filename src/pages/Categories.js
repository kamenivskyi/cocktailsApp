import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import CocktailService from '../services/CocktailService';

const Categories = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  const { getCategories } = CocktailService;

  useEffect(() => {
    const generateCategories = () => {
      getCategories()
        .then(items => {
          setItems(items);
          setLoading(false)
        })
        .catch(onError);
    };

    generateCategories()
  }, [])

  const onError = (error) => console.log(error)

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='list-group'>
      {items && items.map(({ strCategory }) => {
        const formatedCategory = strCategory.replace(/[\.\/]/g, '/%20');
        // let result = strCategory.replace(/[\/]/g, '_').trim();
        // console.log(category);
        return (
          <Link
            to={`/category/${formatedCategory}`}
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
