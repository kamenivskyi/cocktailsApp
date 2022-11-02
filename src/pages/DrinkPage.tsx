import React from "react";

import DrinkView from "components/drinks/DrinkView";
import ErrorBoundary from "components/helpers/ErrorBoundary";
import drinksService from "services/DrinksService";
import useAsyncData from "hooks/useAsyncData";
import { useParams } from "react-router-dom";
import { IServerDrinkMainProps } from "interfaces/serverResponse";

const DrinkPage = (): JSX.Element => {
  const params = useParams<{ id?: string }>();

  const { data, loading, error } = useAsyncData<IServerDrinkMainProps>(
    drinksService.getDrinkById,
    params.id
  );

  return (
    <ErrorBoundary>
      <DrinkView data={data} loading={loading} error={error} />
    </ErrorBoundary>
  );
};

export default DrinkPage;
