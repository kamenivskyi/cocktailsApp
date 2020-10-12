import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CocktailData from './CocktailData';

import CocktailService from '../../services/CocktailService';
import Spinner from '../layout/Spinner';

const Cocktail = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { getDrinkById } = new CocktailService();

  useEffect(() => {
    onMoreDetails(match.params.id);
  }, []);

  const onMoreDetails = id => {
    getDrinkById(id)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  };

  if (loading) {
    return <Spinner />
  }

  return <CocktailData cocktailInfo={data} loading={loading} />;
}
Cocktail.propTypes = {
  onMoreDetails: PropTypes.func.isRequired,
  cocktailInfo: PropTypes.object
};
export default Cocktail;
