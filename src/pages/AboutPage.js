import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="jumbotron">
      <p className="lead">{t("About cite description")}</p>
      <hr className="my-4" />
      <p>{t("About cite version title")}: 1.2.0</p>
    </div>
  );
};

export default AboutPage;
