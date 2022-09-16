import React from "react";
import PropTypes from "prop-types";

import { Button } from "components/layout/Button";
import { useTranslation } from "react-i18next";

const SearchPanelView = ({ handleSubmit, handleChange, value }) => {
  const { t } = useTranslation();

  return (
    <form className="form-group col-md-6" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={t("Enter the name of drink")}
          aria-label="Search cocktails"
          onChange={handleChange}
          value={value}
        />
        <div className="input-group-append">
          <Button type="submit" className="btn btn-outline-primary btn-sm">
            {t("Search")}
          </Button>
        </div>
      </div>
    </form>
  );
};

SearchPanelView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchPanelView;
