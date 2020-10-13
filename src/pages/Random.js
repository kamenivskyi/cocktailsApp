import React from 'react';
import CocktailData from '../components/cocktails/CocktailData';

import CocktailService from '../services/CocktailService';
import withData from '../hoc-helpers/withData';

const { getRandom } = CocktailService;

const Random = props => {
  const { data, loading } = props;

  // console.log(props)

  if (data) {
    return <CocktailData data={data} loading={loading} />;
  } else {
    return null;
  }
};

export default withData(Random, getRandom);
