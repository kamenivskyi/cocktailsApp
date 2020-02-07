import React from 'react';
import PropTypes from 'prop-types';
import CocktailItem from './CocktailItem';
import Spinner from '../layout/Spinner';

const Cocktails = ({ cocktails, loading }) => {
  if (loading) return <Spinner />;
  else if (!cocktails) {
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
      {cocktails.map(item => {
        return <CocktailItem item={item} key={item.idDrink} />;
      })}
    </div>
  );
};

Cocktails.propTypes = {
  cocktails: PropTypes.array,
  loading: PropTypes.bool.isRequired
};

export default Cocktails;
