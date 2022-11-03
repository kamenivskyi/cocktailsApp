import React from "react";

import ErrorFallback, { IErrorInfo } from "./ErrorFallback";

interface IErrorBoundary {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
  errorInfo: IErrorInfo | null;
}

class ErrorBoundary extends React.Component<IErrorBoundary | any> {
  public state: IState = {
    hasError: false,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    const { hasError, errorInfo } = this.state;

    if (hasError) {
      return <ErrorFallback errorInfo={errorInfo} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
