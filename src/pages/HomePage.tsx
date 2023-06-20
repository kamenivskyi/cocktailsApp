import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Alert from "components/layout/Alert";
import SearchPanel from "components/drinks/SearchPanel";
import Filter from "components/drinks/Filter";
import DrinksList from "components/drinks/DrinksList";
import ErrorBoundary from "components/helpers/ErrorBoundary";

import drinksService from "services/DrinksService";
import { useAlert } from "hooks";
import { getFilteredDrinks } from "utils/utils";
import { DEFAULT_DRINK } from "config";
import { useTranslation } from "react-i18next";
import { IDrinkItem } from "interfaces/drink";

let savedValue = "";

const HomePage = (): JSX.Element | null => {
  const [term, setTerm] = useState("");
  const [searchValue, setSearchValue] = useState(savedValue);
  const [alert, generateAlert] = useAlert();
  const { t } = useTranslation();

  const { isFetching, isError, data } = useQuery({
    queryFn: () => drinksService.getDrinksByName(searchValue || DEFAULT_DRINK),
    queryKey: ["searchValue", searchValue],
    staleTime: 5000 * 60,
  });

  useEffect(() => {
    savedValue = searchValue;
  }, [searchValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const saveValue = (value: string) => {
    setSearchValue(value);
  };

  const visibleDrinks = getFilteredDrinks<IDrinkItem[] | null>(data, term);
  const noData = !isFetching && !visibleDrinks?.length && !isError;

  return (
    <ErrorBoundary>
      <Alert alert={alert} />
      <div className="row">
        <SearchPanel searchDrinks={saveValue} generateAlert={generateAlert} />
        <Filter handleChange={onChange} term={term} />
      </div>

      {noData ? (
        <p className="text-center" style={{ fontSize: "1.5rem" }}>
          {t("Drinks not found")}
        </p>
      ) : (
        <DrinksList items={visibleDrinks} loading={isFetching} />
      )}
      {isError && <p className="text-center">{t("Something went wrong")}!</p>}
    </ErrorBoundary>
  );
};

export default HomePage;
