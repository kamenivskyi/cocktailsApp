import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CocktailItem from "../CocktailItem";
import Spinner from "../Spinner";
import "./Cocktails.css";

const Cocktails = ({ onMoreDetails, cocktails, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {cocktails.map(item => {
        console.log(item);
        return (
          <CocktailItem
            item={item}
            onMoreDetails={onMoreDetails}
            key={item.idDrink}
          />
        );
      })}
    </Fragment>
  );
};

Cocktails.propTypes = {
  cocktails: PropTypes.array.isRequired,
  onMoreDetails: PropTypes.func.isRequired
};

export default Cocktails;
