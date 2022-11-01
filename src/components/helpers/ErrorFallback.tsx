import React from "react";

import "./ErrorFallback.css";

export interface IErrorInfo {
  message?: string;
}

interface IErrorFallback {
  errorInfo: IErrorInfo | null;
}

const ErrorFallback = ({ errorInfo }: IErrorFallback) => (
  <div className="error-fallback">
    <h1 className="text-danger">
      {errorInfo?.message || "Oops! Error! Something went wrong!"}
    </h1>
  </div>
);

export default ErrorFallback;
