import React from "react";
import { useTranslation } from "react-i18next";

import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import { decodeBase64 } from "utils/base64helpers";
import { useParams } from "react-router-dom";
import { ICategoryDrinksParams } from "interfaces/paramsTypes";
import { useQuery } from "@tanstack/react-query";

const CategoryDrinksPage = (): JSX.Element => {
  const { t } = useTranslation();
  const params = useParams<ICategoryDrinksParams>();
  const decodedCategory = decodeBase64(params.name);

  const { isFetching, data, error } = useQuery({
    queryFn: () => drinksService.getCategoryDrinks(decodedCategory),
    queryKey: ["categoryDrinks", decodedCategory],
  });

  return (
    <ErrorBoundary>
      <DrinksList items={data} loading={isFetching} />
      {error && <p className="text-center">{t("Something went wrong")}</p>}
    </ErrorBoundary>
  );
};

export default CategoryDrinksPage;
