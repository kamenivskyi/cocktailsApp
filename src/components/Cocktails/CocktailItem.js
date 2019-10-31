import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CocktailItem = ({
  item: { idDrink, strDrinkThumb, strDrink, strCategory }
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={strDrinkThumb} className="card-img-top" alt={strDrink} />
        <div className="card-body">
          <h5 className="card-title">{strDrink}</h5>
          <p className="card-text">Category: {strCategory}</p>
          <Link to={`/cocktail/${idDrink}`} className="btn btn-secondary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};
CocktailItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CocktailItem;
