import PropTypes from 'prop-types';

const ingredsAndMeasures = PropTypes.arrayOf(
  PropTypes.shape({
    ingredient: PropTypes.string,
    measure: PropTypes.string,
  })
);

export const idPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]).isRequired;

export const drinkViewShape = PropTypes.shape({
  id: idPropType,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  category: PropTypes.string,
  glass: PropTypes.string,
  iba: PropTypes.string,
  type: PropTypes.string,
  instructions: PropTypes.string,
  ingredsAndMeasures,
});
