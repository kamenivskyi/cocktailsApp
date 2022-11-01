import React, { useState } from "react";

import SearchPanelView from "./SearchPanelView";

import drinksService from "services/DrinksService";
import { useTranslation } from "react-i18next";

interface ISearchPanel {
  getDrinks: (func: Function, value: string) => void;
  generateAlert: (message: string, type: string) => void;
}

const EMPTY_FIELD_MESSAGE =
  "This field can not be empty! Enter the name of the drink!";
const ALERT_WARNING_COLOR = "warning";

const SearchPanel = ({ getDrinks, generateAlert }: ISearchPanel) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setValue(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim()) {
      getDrinks(drinksService.getDrinksByName, value);
      setValue("");
    } else {
      generateAlert(t(EMPTY_FIELD_MESSAGE), ALERT_WARNING_COLOR);
    }
  };

  return (
    <SearchPanelView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={value}
    />
  );
};

export default React.memo(SearchPanel);
