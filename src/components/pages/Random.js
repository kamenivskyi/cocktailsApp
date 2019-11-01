import React, { Component } from "react";
import PropTypes from "prop-types";
import CocktailData from "../cocktails/CocktailData";

class Random extends Component {
  componentDidMount() {
    this.props.getRandomCocktail();
  }
  render() {
    const { cocktailInfo, loading } = this.props;
    return <CocktailData cocktailInfo={cocktailInfo} loading={loading} />;
  }
}
Random.propTypes = {
  getRandomCocktail: PropTypes.func.isRequired,
  randomCocktail: PropTypes.object
};

export default Random;
