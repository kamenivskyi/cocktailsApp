import React from "react";
import { useQuery } from "@tanstack/react-query";

import DrinkView from "components/drinks/DrinkView";
import ErrorBoundary from "components/helpers/ErrorBoundary";

import drinksService from "services/DrinksService";

const RandomDrinkPage = (): JSX.Element => {
  const { data, isFetching, isFetchedAfterMount } = useQuery({
    queryFn: () => drinksService.getRandom(),
    queryKey: ["getRandom"],
    staleTime: 0,
  });
  const actualData = isFetchedAfterMount ? data : null;

  return (
    <ErrorBoundary>
      <DrinkView data={actualData} loading={isFetching} />
    </ErrorBoundary>
  );
};

export default RandomDrinkPage;
