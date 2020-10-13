import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CocktailData = props => {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strGlass,
    strCategory,
    strIBA,
    ...restProps
  } = props.data;

  const getCorrectPropsValues = (arr, propName) => {
    const correctProps = [];

    for (let key in arr) {
      const isCorrectProp = key.includes(propName) && arr[key];

      if (isCorrectProp) {
        correctProps.push(arr[key]);
      }
    }

    return correctProps;
  }

  const getBadgeClass = (compareA, compareB) => {
    const classes = ['badge', 'mr-3'];

    classes.push(compareA === compareB ? 'badge-danger' : 'badge-success')

    return classes.join(' ');
  }

  const renderIngredients = () => (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={Math.random()}>
          <span>
            {ingredient} {measures[idx] && `(${measures[idx]})`}
          </span>
        </li>
      ))}
    </ul>
  );

  const ingredients = getCorrectPropsValues(restProps, 'strIngredient');
  const measures = getCorrectPropsValues(restProps, 'strMeasure');
  const badgeClasses = getBadgeClass(strAlcoholic, 'Alcoholic');

  console.log(badgeClasses);
  // console.log(measures);

  return (
    <div className='row'>
      <div className='col-md-4 mb-3'>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className='col-md-8'>
        <div className='card p-3'>
          <h5>{strDrink}</h5>
          <p>
            <span className='text-info font-weight-bold'>Instruction:</span>{' '}
            {strInstructions}
          </p>
          <p>
            Category: <span className='badge badge-primary'>{strCategory}</span>
          </p>
          <p>
            Type: <span className={badgeClasses}>{strAlcoholic}</span>
            Glass:{' '}
            <span className='badge badge-secondary mr-3'>{strGlass}</span>
            {strIBA && <span>IBA: <span className='badge badge-success mr-3'> {strIBA}</span></span>}
          </p>
          <div>
            Ingredients:
            {renderIngredients()}
          </div>
        </div>

        <NavLink className='btn btn-dark my-3' to='/'>
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
