import React from "react";
import Filters from "../cocktails/Filters";
import Search from "../cocktails/Search";

const Form = ({ searchCocktails, setAlert }) => {
  return (
    <div className="form-inline">
      <Filters />
      <Search searchCocktails={searchCocktails} setAlert={setAlert} />
    </div>
  );
};

export default Form;
