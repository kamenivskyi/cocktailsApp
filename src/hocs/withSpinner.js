import React from 'react';

import Spinner from 'components/layout/Spinner';

const withSpinner = (WrappedComponent) => ({ loading, ...otherProps }) => {
  return loading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
