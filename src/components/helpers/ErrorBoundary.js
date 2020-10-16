import React from 'react';

import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    // this.setState({ hasError: true, errorInfo: error.info })
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  // this.setState({ hasError: true, errorInfo });
  // }

  render() {
    const { hasError, errorInfo } = this.state;

    if (hasError) {
      return <ErrorFallback errorInfo={errorInfo} />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;