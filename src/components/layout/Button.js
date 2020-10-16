import React from 'react';
import PropTypes from 'prop-types'

export const Button = ({ type, children, ...props }) => (
  <button type={type} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node
  ])
};