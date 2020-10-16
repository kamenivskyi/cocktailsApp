import React from "react";
import PropTypes from 'prop-types'

const Alert = ({ alert }) => (
  alert !== null && (
    <div className={`alert alert-${alert.type}`} role="alert">
      {alert.msg}
    </div>
  )
);

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    alert: PropTypes.string,
  }),
};

export default Alert;
