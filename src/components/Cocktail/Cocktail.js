import React from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = ({
  cocktailInfo: {
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
    strIngredient15
  },
  cocktailInfo,
  loading
}) => {
  const ingredients = [
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
  let classNames = "badge mr-3 badge-";
  if (strAlcoholic === "Alcoholic") {
    classNames += "danger";
  } else {
    classNames += "success";
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="col-md-4">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="col-md-8">
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
          Glass: <span className="badge badge-secondary mr-3">{strGlass}</span>
          {strIBA && (
            <>
              IBA: <span className="badge badge-success mr-3">{strIBA}</span>{" "}
            </>
          )}
        </p>
        <div>
          Ingredients:
          <ul>
            {ingredients
              .filter(item => item)
              .map(item => (
                <li className="text-warning" key={Math.random()}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <Link className="btn btn-info" to="/">
          Back to home
        </Link>
      </div>
    </>
  );
};

export default Cocktail;
