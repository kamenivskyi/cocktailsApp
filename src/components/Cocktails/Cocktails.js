import React from 'react';
import PropTypes from 'prop-types';

import CocktailItem from './CocktailItem';
import Spinner from '../layout/Spinner';

const Cocktails = ({ drinks, loading }) => {
  if (loading) {
    return <Spinner />;

  } else if (!drinks) {
    return (
      <div className='row justify-content-center'>
        <h2 className='text-danger mt-3'>
          Maybe you are drunk :D ? Choose a more acceptable name.
        </h2>
      </div>
    );
  }

  return (
    <div className='row'>
      {drinks.map(item => {
        return <CocktailItem item={item} key={item.name} />;
      })}
    </div>
  );
};

Cocktails.propTypes = {
  drinks: PropTypes.array,
  loading: PropTypes.bool.isRequired
};

export default Cocktails;
