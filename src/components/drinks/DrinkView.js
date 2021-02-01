import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { withSpinner } from 'hocs';
import { drinkViewShape } from 'utils/commonPropTypes';

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
    ingredsAndMeasures,
  } = data;

  const getTypeBadgeClass = (compareA, compareB) =>
    classNames(['badge', 'mr-3'], {
      'badge-danger': compareA === compareB,
      'badge-success': compareA !== compareB,
    });

  const renderIngredients = () =>
    ingredsAndMeasures && (
      <ul>
        {ingredsAndMeasures.map(({ ingredient, measure }) => (
          <li key={`ingredient_${Math.random()}`}>
            <span>
              {ingredient} {measure ? `(${measure})` : ''}
            </span>
          </li>
        ))}
      </ul>
    );

  const typeBadgeClasses = getTypeBadgeClass(type, 'Alcoholic');
  const ingredients = renderIngredients();

  return (
    <div className='card'>
      <div className='row'>
        {imgUrl && (
          <div className='col-md-4'>
            <img className='card-img' src={imgUrl} alt={name} />
          </div>
        )}
        <div className='col-md-8'>
          <div className='card-body'>
            {name && <h5 className='card-title'>{name}</h5>}
            {instructions && (
              <p className='card-text'>
                <span className='text-info font-weight-bold'>Instruction:</span>{' '}
                {instructions}
              </p>
            )}
            {category && (
              <p className='card-text'>
                Category:{' '}
                <span className='badge badge-primary'>{category}</span>
              </p>
            )}
            {type && (
              <p className='card-text'>
                Type: <span className={typeBadgeClasses}>{type}</span>
              </p>
            )}
            {iba && (
              <p className='card-text'>
                IBA: <span className='badge badge-success mr-3'> {iba}</span>
              </p>
            )}
            {glass && (
              <p className='card-text'>
                Glass: <span className='badge badge-info mr-3'>{glass}</span>
              </p>
            )}
            {ingredients && (
              <div>
                Ingredients:
                {ingredients}
              </div>
            )}
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
  data: drinkViewShape,
};

const DrinkViewWithSpinner = withSpinner(DrinkView);

export default DrinkViewWithSpinner;
