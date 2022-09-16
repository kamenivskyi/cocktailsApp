import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Filter = ({ onFilterChange, term }) => {
  const { t } = useTranslation();

  const handleChange = ({ target: { value } }) => {
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

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
