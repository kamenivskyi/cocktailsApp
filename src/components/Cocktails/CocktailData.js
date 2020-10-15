import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CocktailData = props => {
  const {
    name,
    imgUrl,
    instructions,
    type,
    glass,
    category,
    iba,
    ingredsAndMeasures
  } = props.data;

  const getTypeBadgeClass = (compareA, compareB) => {
    const classes = ['badge', 'mr-3'];

    classes.push(compareA === compareB ? 'badge-danger' : 'badge-success')

    return classes.join(' ');
  }

  const renderIngredients = () => (
    <ul>
      {ingredsAndMeasures.map(({ ingredient, measure }) => (
        <li key={Math.random()}>
          <span>
            {ingredient} {measure ? `(${measure})` : ''}
          </span>
        </li>
      ))}
    </ul>
  );

  const typeBadgeClasses = getTypeBadgeClass(type, 'Alcoholic');

  return (
    <div className='row'>
      <div className='col-md-4 mb-3'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='col-md-8'>
        <div className='card p-3'>
          <h5>{name}</h5>
          <p>
            <span className='text-info font-weight-bold'>Instruction:</span>{' '}
            {instructions}
          </p>
          <p>
            Category: <span className='badge badge-primary'>{category}</span>
          </p>
          <p>
            Type: <span className={typeBadgeClasses}>{type}</span>
            Glass:{' '}
            <span className='badge badge-info mr-3'>{glass}</span>
            {iba && <span>IBA: <span className='badge badge-success mr-3'> {iba}</span></span>}
          </p>
          <div>
            Ingredients:
            {renderIngredients()}
          </div>
        </div>

        <NavLink className='btn btn-primary btn-sm my-3' to='/'>
          Back to home
        </NavLink>
      </div>
    </div>
  );
};
CocktailData.propTypes = {
  data: PropTypes.object
};
export default CocktailData;
