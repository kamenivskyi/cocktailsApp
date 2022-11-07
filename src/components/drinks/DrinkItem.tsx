import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IDrinkItem } from "interfaces/drink";

const DrinklItem = ({ item }: { item: IDrinkItem }): JSX.Element => {
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
          <Link to={`/drink/${id}`} className="btn btn-outline-dark">
            {t("Card more details button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrinklItem;
