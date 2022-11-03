import React from "react";

import drinksService from "services/DrinksService";
import Categories from "components/drinks/Categories";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import { useQuery } from "@tanstack/react-query";

const CategoriesPage = (): JSX.Element => {
  const { data, isFetching } = useQuery({
    queryFn: drinksService.getCategories,
    queryKey: ["categories"],
  });

  return (
    <ErrorBoundary>
      <Categories items={data} loading={isFetching} />
    </ErrorBoundary>
  );
};

export default CategoriesPage;
