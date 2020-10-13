import React from 'react';

export const Button = ({ type, children, ...props }) => (
  <button type={type || 'button'} {...props}>
    {children}
  </button>
);
