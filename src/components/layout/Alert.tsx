import React from "react";

interface IProps {
  alert: {
    msg: string;
    type: string;
  } | null;
}

const Alert = ({ alert }: IProps) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`} role="alert">
      {alert.msg}
    </div>
  );

export default Alert;
