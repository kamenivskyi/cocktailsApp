import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CocktailItem.css";

const CocktailItem = ({
  item: { idDrink, strDrinkThumb, strDrink, strCategory },
  onMoreDetails
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card" style={{ maxWidth: "19rem" }}>
        <img src={strDrinkThumb} className="card-img-top" alt={strDrink} />
        <div className="card-body">
          <h5 className="card-title">{strDrink}</h5>
          <p className="card-text">Category: {strCategory}</p>
          <Link
            to="/cocktail"
            className="btn btn-secondary"
            onClick={() => onMoreDetails(idDrink)}
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};
CocktailItem.propTypes = {
  item: PropTypes.object.isRequired,
  onMoreDetails: PropTypes.func.isRequired
};

export default CocktailItem;
