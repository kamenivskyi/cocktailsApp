import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { withSpinner } from "hocs";
import { useTranslation } from "react-i18next";
import { IDrinkItem, IMeasureAndIngredient } from "interfaces/drink";

interface IDrinkView {
  data: IDrinkItem;
}

type TReturnedType = JSX.Element | null;

const DrinkView = ({ data }: IDrinkView): TReturnedType => {
  const { t } = useTranslation();

  if (!data) {
    return null;
  }

  const {
    name,
    imgUrl,
    instructions,
    type,
    glass,
    category,
    iba,
    ingredsAndMeasures,
  } = data;

  const getTypeBadgeClass = (compareA: string) =>
    classNames(["badge", "mr-3"], {
      "bg-danger": compareA === "Alcoholic",
      "bg-success": compareA !== "Alcoholic",
    });

  const ingredientsAndMeasures = ingredsAndMeasures ? (
    <ul>
      {ingredsAndMeasures.map(
        ({ ingredient, measure }: IMeasureAndIngredient, idx: number) => {
          return (
            <li key={`ingredient_${idx}`}>
              <span>
                {ingredient} {measure ? `(${measure})` : ""}
              </span>
            </li>
          );
        }
      )}
    </ul>
  ) : null;

  return (
    <div className="card">
      <div className="row">
        {imgUrl && (
          <div className="col-md-4">
            <img className="card-img" src={imgUrl} alt={name} />
          </div>
        )}
        <div className="col-md-8">
          <div className="card-body">
            {name && <h5 className="card-title">{name}</h5>}
            {instructions && (
              <p className="card-text">
                <span className="text-info font-weight-bold">
                  {t("Drink page instruction property")}:
                </span>{" "}
                {instructions}
              </p>
            )}
            {category && (
              <p className="card-text">
                {t("Drink page category property")}:{" "}
                <span className="badge bg-primary">{category}</span>
              </p>
            )}
            {type && (
              <p className="card-text">
                {t("Drink page type property")}:{" "}
                <span className={getTypeBadgeClass(type)}>{type}</span>
              </p>
            )}
            {iba && (
              <p className="card-text">
                {t("Drink page iba property")}:{" "}
                <span className="badge bg-success mr-3"> {iba}</span>
              </p>
            )}
            {glass && (
              <p className="card-text">
                {t("Drink page glass property")}:{" "}
                <span className="badge bg-info mr-3">{glass}</span>
              </p>
            )}
            {ingredientsAndMeasures && (
              <div>
                {t("Drink page ingredients property")}:{ingredientsAndMeasures}
              </div>
            )}
            <NavLink className="btn btn-primary my-3" to="/">
              {t("Drink page back to home")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const DrinkViewWithSpinner = withSpinner(DrinkView);

export default DrinkViewWithSpinner;
