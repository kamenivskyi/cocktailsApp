import React from 'react';
import CocktailData from '../components/Cocktails/CocktailData';
import CocktailService from '../services/CocktailService';
import withData from '../components/hoc-helpers/with-data';

const { getRandom } = CocktailService;

const Random = props => {
  const { data, loading } = props;

  if (data) {
    return <CocktailData cocktailInfo={data} loading={loading} />;
  } else {
    return null;
  }
};

export default withData(Random, getRandom);
