import React from "react";
import { useTranslation } from "react-i18next";

interface IFilter {
  onFilterChange: (value: string) => void;
  term: string;
}

const Filter = ({ onFilterChange, term }: IFilter): JSX.Element => {
  const { t } = useTranslation();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(value);
  };

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
