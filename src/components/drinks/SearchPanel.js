import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchPanelView from "./SearchPanelView";

import drinksService from "services/DrinksService";
import { useTranslation } from "react-i18next";

const SearchPanel = ({ getDrinks, generateAlert }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      getDrinks(drinksService.getDrinksByName, value);
      setValue("");
    } else {
      generateAlert(
        t("This field can not be empty! Enter the name of the drink!"),
        "warning"
      );
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
SearchPanel.propTypes = {
  getDrinks: PropTypes.func.isRequired,
  generateAlert: PropTypes.func.isRequired,
};

export default React.memo(SearchPanel);
