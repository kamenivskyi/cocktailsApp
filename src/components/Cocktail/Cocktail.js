import React from "react";
import Spinner from "../Spinner";
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
        <p>{strInstructions}</p>
        <p>
          Category: <span className="badge badge-primary">{strCategory}</span>
        </p>
        <p>
          Type:{" "}
          <span
            className={
              strAlcoholic === "Alcoholic"
                ? "badge badge-danger mr-3"
                : "badge badge-success mr-3"
            }
          >
            {strAlcoholic}
          </span>
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
            <li className="text-warning">{strIngredient1}</li>
            <li className="text-warning">{strIngredient2}</li>
            <li className="text-warning">{strIngredient3}</li>
            <li className="text-warning">{strIngredient4}</li>
            <li className="text-warning">{strIngredient5}</li>
            <li className="text-warning">{strIngredient6}</li>
            <li className="text-warning">{strIngredient7}</li>
            <li className="text-warning">{strIngredient8}</li>
            <li className="text-warning">{strIngredient9}</li>
            <li className="text-warning">{strIngredient10}</li>
            <li className="text-warning">{strIngredient11}</li>
            <li className="text-warning">{strIngredient12}</li>
            <li className="text-warning">{strIngredient13}</li>
            <li className="text-warning">{strIngredient14}</li>
            <li className="text-warning">{strIngredient15}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
