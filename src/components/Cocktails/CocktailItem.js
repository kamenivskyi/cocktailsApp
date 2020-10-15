import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CocktailItem = ({ item }) => {
  const { name, imgUrl, id, category } = item;

  console.log(item)

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card'>
        <img src={imgUrl} className='card-img-top' alt={name} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          {category && <p className='card-text'>Category: {category}</p>}
          <Link
            to={`/cocktail/${id}`}
            className='btn btn-outline-primary btn-sm'
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};
CocktailItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CocktailItem;
