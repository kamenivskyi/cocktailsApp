import React, { useState } from "react";

import Alert from "components/layout/Alert";
import SearchPanel from "components/drinks/SearchPanel";
import Filter from "components/drinks/Filter";
import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";

import drinksService from "services/DrinksService";
import { useAlert, useAsyncData } from "hooks";
import { getFilteredDrinks } from "utils/utils";
import { DEFAULT_DRINK } from "config";
import { useTranslation } from "react-i18next";
import { IDrinkItem } from "interfaces/drink";

const HomePage = (): JSX.Element | null => {
  const [term, setTerm] = useState("");
  const [alert, generateAlert] = useAlert();
  const { t } = useTranslation();
  const { data, loading, error, doFetch } = useAsyncData<IDrinkItem[] | null>(
    drinksService.getDrinksByName,
    DEFAULT_DRINK
  );

  const visibleDrinks = getFilteredDrinks<IDrinkItem[] | null>(data, term);
  const noData = !loading && !visibleDrinks?.length && !error;

  return (
    <ErrorBoundary>
      <Alert alert={alert} />
      <div className="form-row">
        <SearchPanel getDrinks={doFetch} generateAlert={generateAlert} />
        <Filter onFilterChange={setTerm} term={term} />
      </div>

      {noData ? (
        <p className="text-center" style={{ fontSize: "1.5rem" }}>
          {t("Drinks not found")}
        </p>
      ) : (
        <DrinksList items={visibleDrinks} loading={loading} />
      )}
      {error && <p className="text-center">{t("Something went wrong")}!</p>}
    </ErrorBoundary>
  );
};

export default HomePage;
