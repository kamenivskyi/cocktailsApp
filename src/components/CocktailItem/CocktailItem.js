import React from "react";
import { Link } from "react-router-dom";
import "./CocktailItem.css";

const CocktailItem = ({
  item: { idDrink, strDrinkThumb, strDrink, strCategory },
  onMoreDetails
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "16rem" }}>
        <img src={strDrinkThumb} className="card-img-top" alt={strDrink} />
        <div className="card-body">
          <h5 className="card-title">{strDrink}</h5>
          <p className="card-text">Category: {strCategory}</p>
          <button
            className="btn btn-secondary"
            onClick={() => onMoreDetails(idDrink)}
          >
            More details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailItem;
