import React from "react";

const Spinner = () => (
  <div className="d-flex justify-content-center mt-5">
    <div
      className="spinner-border"
      style={{ width: "3.5rem", height: "3.5rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);


export default Spinner;
