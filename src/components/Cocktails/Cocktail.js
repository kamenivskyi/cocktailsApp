import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CocktailData from './CocktailData';

class Cocktail extends Component {
  async componentDidMount() {
    const { onMoreDetails, match } = this.props;
    onMoreDetails(match.params.id);
  }

  render() {
    const { cocktailInfo, loading } = this.props;
    return <CocktailData cocktailInfo={cocktailInfo} loading={loading} />;
  }
}
Cocktail.propTypes = {
  onMoreDetails: PropTypes.func.isRequired,
  cocktailInfo: PropTypes.object
};
export default Cocktail;
