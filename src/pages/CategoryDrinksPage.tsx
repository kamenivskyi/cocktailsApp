import React from "react";
import { useTranslation } from "react-i18next";

import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import useAsyncData from "hooks/useAsyncData";
import { decodeBase64 } from "utils/base64helpers";
import { useParams } from "react-router-dom";
import { ICategoryDrinksParams } from "interfaces/paramsTypes";

const CategoryDrinksPage = (): JSX.Element => {
  const { t } = useTranslation();
  const params = useParams<ICategoryDrinksParams>();
  const decodedCategory = decodeBase64(params.name);

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
