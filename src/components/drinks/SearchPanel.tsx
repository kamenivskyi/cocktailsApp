import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { Button } from "components/layout/Button";

interface ISearchPanel {
  searchDrinks: (value: string) => void;
  generateAlert: (msg: string, type: string, timeout?: number) => void;
}

const EMPTY_FIELD_MESSAGE =
  "This field can not be empty! Enter the name of the drink!";
const ALERT_WARNING_COLOR = "warning";

const SearchPanel = ({
  searchDrinks,
  generateAlert,
}: ISearchPanel): JSX.Element => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setValue(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim()) {
      searchDrinks(value);
      setValue("");
    } else {
      generateAlert(t(EMPTY_FIELD_MESSAGE), ALERT_WARNING_COLOR);
    }
  };

  return (
    <div className="col-md-6">
      <form className="input-group" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={t("Enter the name of drink")}
            aria-label="Search cocktails"
            onChange={handleChange}
            value={value}
          />
          <Button type="submit" className="btn btn-dark">
            {t("Search")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchPanel);
