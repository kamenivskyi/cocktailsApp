import React from "react";
import { useTranslation } from "react-i18next";

import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import useAsyncData from "hooks/useAsyncData";
import { decodeBase64 } from "utils/base64helpers";

const CategoryDrinksPage = ({ match }) => {
  const { t } = useTranslation();
  const decodedCategory = decodeBase64(match.params.name);

  const { data, error, loading } = useAsyncData(
    drinksService.getCategoryDrinks,
    decodedCategory
  );

  return (
    <ErrorBoundary>
      <DrinksList items={data} loading={loading} />
      {error && <p className="text-center">{t("Something went wrong")}</p>}
    </ErrorBoundary>
  );
};

export default CategoryDrinksPage;
