import React, { useState, useEffect } from 'react';

import CocktailItem from '../components/Cocktails/CocktailItem';
import Spinner from '../components/layout/Spinner';
import CocktailService from '../services/CocktailService';

const CategoryDrinks = ({ match }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getCategoryDrinks } = CocktailService;

  useEffect(() => {
    let cancelled = false;

    const getDrinks = category => {
      getCategoryDrinks(category).then(items => {
        if (!cancelled) {
          setDrinks(items);
          setLoading(false);
        }
      });
    };

    getDrinks(match.params.name);

    return () => { cancelled = true };
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='row'>
      {drinks.map(drink => (
        <CocktailItem item={drink} key={drink.strDrink} />
      ))}
    </div>
  );
}

export default CategoryDrinks;
