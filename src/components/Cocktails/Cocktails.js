import React from "react";
import PropTypes from "prop-types";
import CocktailItem from "../CocktailItem";
import Spinner from "../Spinner";
import "./Cocktails.css";

const Cocktails = ({ onMoreDetails, cocktails, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {cocktails.map(item => {
        return (
          <CocktailItem
            item={item}
            onMoreDetails={onMoreDetails}
            key={item.idDrink}
          />
        );
      })}
    </>
  );
};

Cocktails.propTypes = {
  cocktails: PropTypes.array.isRequired,
  onMoreDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Cocktails;
