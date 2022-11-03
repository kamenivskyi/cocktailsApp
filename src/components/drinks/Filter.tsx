import React from "react";
import { useTranslation } from "react-i18next";

interface IFilter {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  term: string;
}

const Filter = ({ handleChange, term }: IFilter): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="form-group col-md-6">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder={t("Type the name of the drink to filter")}
          onChange={handleChange}
          value={term}
        />
      </div>
    </div>
  );
};

export default Filter;
