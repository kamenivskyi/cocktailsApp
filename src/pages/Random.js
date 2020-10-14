import React, { useState, useEffect } from 'react';
import CocktailData from '../components/cocktails/CocktailData';
import Spinner from '../components/layout/Spinner';
import useFetchDrinks, { useRandomDrink } from '../hooks/useFetchDrinks';

import CocktailService from '../services/CocktailService';
// import withData from '../hoc-helpers/withData';

const { getRandom } = CocktailService;

const Random = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);

    getRandom().then(data => {
      if (!cancelled) {
        setData(data);
        setLoading(false);
      }
    })
    return () => { cancelled = true };
  }, []);

  if (loading) {
    return <Spinner />
  }

  if (data) {
    return <CocktailData data={data} loading={loading} />;
  } 
  
  return;
};

export default Random;
