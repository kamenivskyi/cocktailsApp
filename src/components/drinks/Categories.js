import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withSpinner } from '../../hocs';
import formatCategory from '../../utils/formatCategory';

const Categories = ({ items }) => (
  <div className='list-group'>
    {items && items.map(({ category }) => {
      const categoryForCorrectUrl = formatCategory(category, '/', '_');

      return (
        <Link
          to={`/category/${categoryForCorrectUrl}`}
          className='list-group-item list-group-item-action'
          key={category}
        >
          {category}
        </Link>
      );
    })}
  </div>
);

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
  })),
};

const CategoriesWithSpinner = withSpinner(Categories);

export default CategoriesWithSpinner;
