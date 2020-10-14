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
    setLoading(true);

    getRandom().then(data => {
      setData(data);
      setLoading(false);
    })
    return () => {

    }
  }, []);

  console.log(data)
  // const { data, loading } = useRandomDrink();

  // console.log(data.drinks);

  if (loading) {
    return <Spinner />
  }

  // console.log(props)

  if (data) {
    return <CocktailData data={data} loading={loading} />;
  } else {
    return null;
  }
};

export default Random;
