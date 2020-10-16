import PropTypes from 'prop-types'

export const drinkViewPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  category: PropTypes.string,
  glass: PropTypes.string,
  iba: PropTypes.string,
  type: PropTypes.string,
  instructions: PropTypes.string,
  ingredsAndMeasures: PropTypes.arrayOf(
    PropTypes.shape({
      ingredient: PropTypes.string,
      measure: PropTypes.string,
    })),
});