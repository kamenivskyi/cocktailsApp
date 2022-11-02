import React from "react";

import DrinkView from "components/drinks/DrinkView";
import ErrorBoundary from "components/helpers/ErrorBoundary";

import drinksService from "services/DrinksService";
import useAsyncData from "hooks/useAsyncData";

const RandomDrinkPage = (): JSX.Element => {
  const { data, loading } = useAsyncData(drinksService.getRandom);

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} />
    </ErrorBoundary>
  );
};

export default RandomDrinkPage;
