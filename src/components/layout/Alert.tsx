import React from "react";

interface IProps {
  alert: {
    msg: string;
    type: string;
  };
}

const Alert = ({ alert }: IProps): JSX.Element | null => {
  if (!alert.msg) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type}`} role="alert">
      {alert.msg}
    </div>
  );
};

export default Alert;
