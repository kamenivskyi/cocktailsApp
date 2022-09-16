import React from "react";
import { useTranslation } from "react-i18next";

const Spinner = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-border"
        style={{ width: "3.5rem", height: "3.5rem" }}
        role="status"
      >
        <span className="sr-only">{t("Spinner loading")}...</span>
      </div>
    </div>
  );
};

export default Spinner;
