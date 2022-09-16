import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const DrinklItem = ({ item }) => {
  const { t } = useTranslation();

  const { name, imgUrl, id, category } = item;
  const clippedName = name.length > 19 ? name.substring(0, 16) + ".." : name;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{clippedName}</h5>
          {category && (
            <p className="card-text">
              {t("Card category")}: {category}
            </p>
          )}
          <Link to={`/drink/${id}`} className="btn btn-outline-primary btn-sm">
            {t("Card more details button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

DrinklItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }),
};

export default DrinklItem;
