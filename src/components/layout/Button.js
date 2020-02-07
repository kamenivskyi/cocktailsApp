import React from 'react';

export const Button = ({ type, children, ...props }) => {
  return (
    <button type={type || 'button'} {...props}>
      {children}
    </button>
  );
};
