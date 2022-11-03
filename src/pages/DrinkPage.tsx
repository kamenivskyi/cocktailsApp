import React from "react";

import DrinkView from "components/drinks/DrinkView";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const DrinkPage = (): JSX.Element => {
  const params = useParams<{ id: string }>();

  const { data, isFetching, error } = useQuery({
    queryFn: () => drinksService.getDrinkById(params.id),
    queryKey: ["drinkPage", params.id],
  });

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={isFetching} error={error} />
    </ErrorBoundary>
  );
};

export default DrinkPage;
