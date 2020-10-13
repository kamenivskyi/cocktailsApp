import React, { useEffect, useState } from 'react';

import CocktailData from './CocktailData';
import Spinner from '../layout/Spinner';

import CocktailService from '../../services/CocktailService';

const Cocktail = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { getDrinkById } = CocktailService;

  useEffect(() => {
    let cancelled = false;

    const onMoreDetails = id => {
      getDrinkById(id)
        .then(data => {
          if (!cancelled) {
            setData(data);
            setLoading(false);
          }
        })
        .catch((error) => setError(error));
    };

    onMoreDetails(match.params.id);

    return () => { cancelled = true };
  }, []);


  if (loading) {
    return <Spinner />
  }

  return <CocktailData data={data} loading={loading} />;
}

export default Cocktail;
