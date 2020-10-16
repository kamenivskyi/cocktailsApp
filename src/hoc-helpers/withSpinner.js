import React from 'react';

import Spinner from "../components/layout/Spinner";

const withSpinner = (WrappedComponent) => {
  return ({ loading, ...rest }) => {

    if (loading) {
      return <Spinner />
    }

    return <WrappedComponent {...rest} />
  }
}

export default withSpinner;