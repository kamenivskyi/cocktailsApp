import React from "react";

import Spinner from "components/layout/Spinner";

export interface IWithSpinner {
  loading: boolean;
  [prop: string]: any;
}

const withSpinner =
  (WrappedComponent: React.FunctionComponent<any>) =>
  ({ loading, ...otherProps }: IWithSpinner) => {
    return loading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default withSpinner;
