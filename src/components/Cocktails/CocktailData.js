import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const CocktailData = props => {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
    strGlass,
    strCategory,
    strIBA,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15
  } = props.cocktailInfo;

  const ingredArray = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15
  ];
  const measuresArray = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15
  ];
  const filteredIngreds = ingredArray.filter(item => item);
  const measures = measuresArray.filter(item => item);

  let classNames = "badge mr-3 badge-";
  if (strAlcoholic === "Alcoholic") {
    classNames += "danger";
  } else {
    classNames += "success";
  }
  if (props.loading) {
    return <Spinner />;
  }
  const elements = (
    <ul>
      {filteredIngreds.map((ingred, measureIndx) => (
        <li className="d-flex justify-content-between" key={Math.random()}>
          <span>
            {ingred} {measures[measureIndx] ? `(${measures[measureIndx]})` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="row">
      <div className="col-md-4 mb-3">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="col-md-8">
        <div className="card p-3">
          <h5>{strDrink}</h5>
          <p>
            <span className="text-info font-weight-bold">Instuction:</span>{" "}
            {strInstructions}
          </p>
          <p>
            Category: <span className="badge badge-primary">{strCategory}</span>
          </p>
          <p>
            Type: <span className={classNames}>{strAlcoholic}</span>
            Glass:{" "}
            <span className="badge badge-secondary mr-3">{strGlass}</span>
            {strIBA && (
              <>
                IBA: <span className="badge badge-success mr-3">{strIBA}</span>{" "}
              </>
            )}
          </p>
          <div>
            Ingredients:
            {elements}
          </div>
        </div>

        <Link className="btn btn-dark my-3" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};
CocktailData.propTypes = {
  cocktailInfo: PropTypes.object
};
export default CocktailData;
