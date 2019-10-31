import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class Cocktail extends Component {
  componentDidMount() {
    this.props.onMoreDetails(this.props.match.params.id);
  }

  render() {
    const {
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
      },
      loading
    } = this.props;
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
    const ingredients = ingredArray.filter(item => item);
    const measures = measuresArray.filter(item => item);

    let classNames = "badge mr-3 badge-";
    if (strAlcoholic === "Alcoholic") {
      classNames += "danger";
    } else {
      classNames += "success";
    }
    if (loading) {
      return <Spinner />;
    }
    const elements = (
      <>
        {ingredients.map((ingred, measureIndx) => (
          <li
            className="d-flex justify-content-between mb-2"
            key={Math.random()}
          >
            <span className="text-warning mr-5">
              {ingred} {measures[measureIndx] ? "=>" : ""}
            </span>
            <span>{measures[measureIndx]}</span>
          </li>
        ))}
      </>
    );
    return (
      <div className="row">
        <div className="col-md-4 mb-3">
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
            <ul style={{ width: "50%" }}>{elements}</ul>
          </div>
          <Link className="btn btn-dark mb-3" to="/">
            Back to home
          </Link>
        </div>
      </div>
    );
  }
}
Cocktail.propTypes = {
  onMoreDetails: PropTypes.func.isRequired,
  cocktailInfo: PropTypes.object
};
export default Cocktail;
