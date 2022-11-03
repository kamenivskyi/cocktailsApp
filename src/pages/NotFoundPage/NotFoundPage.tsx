import React from "react";
import { useTranslation } from "react-i18next";

import "./NotFoundPage.css";

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <article className="not-found-page">
      <h1 className="title">{t("Page not found text")}</h1>
      <div className="error-code">
        404 <span className="sad-smile">&#9785;</span>
      </div>
    </article>
  );
};

export default NotFoundPage;
