import React from 'react';
import { NavLink } from 'react-router-dom';

import { withSpinner } from '../../hocs';
import { drinkViewPropTypes } from '../../utils/props-types/drinkViewPropTypes';

const DrinkView = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    name,
    imgUrl,
    instructions,
    type,
    glass,
    category,
    iba,
    ingredsAndMeasures
  } = data;

  const getTypeBadgeClass = (compareA, compareB) => {
    const classes = ['badge', 'mr-3'];

    classes.push(compareA === compareB ? 'badge-danger' : 'badge-success')

    return classes.join(' ');
  }

  const renderIngredients = () => {
    return ingredsAndMeasures && (
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
  }

  const typeBadgeClasses = getTypeBadgeClass(type, 'Alcoholic');

  return (
    <div className='card'>
      <div className='row'>
        <div className="col-md-4">
          <img className='card-img' src={imgUrl} alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>
              <span className='text-info font-weight-bold'>Instruction:</span>{' '}
              {instructions}
            </p>
            <p className='card-text'>
              Category: <span className='badge badge-primary'>{category}</span>
            </p>
            <p className='card-text'>
              Type: <span className={typeBadgeClasses}>{type}</span>
            </p>
            {iba && (
              <p className='card-text'>IBA: {' '}
                <span className='badge badge-success mr-3'> {iba}</span>
              </p>
            )}
            <p className='card-text'>
              Glass:{' '}<span className='badge badge-info mr-3'>{glass}</span>
            </p>
            <div>
              Ingredients:
            {renderIngredients()}
            </div>
            <NavLink className='btn btn-primary btn-sm my-3' to='/'>
              Back to home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

DrinkView.propTypes = {
  data: drinkViewPropTypes
};

const DrinkViewWithSpinner = withSpinner(DrinkView);

export default DrinkViewWithSpinner;
