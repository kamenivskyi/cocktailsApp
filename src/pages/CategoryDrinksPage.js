import React from "react";

import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import useAsyncData from "hooks/useAsyncData";
import { useTranslation } from "react-i18next";

const CategoryDrinksPage = ({ match }) => {
  const { t } = useTranslation();
  const formattedCategory = match.params.name.replaceAll("_", "/");
  const { data, error, loading } = useAsyncData(
    drinksService.getCategoryDrinks,
    formattedCategory
  );

  return (
    <ErrorBoundary>
      <DrinksList items={data} loading={loading} />
      {error && <p className="text-center">{t("Something went wrong")}</p>}
    </ErrorBoundary>
  );
};

export default CategoryDrinksPage;
