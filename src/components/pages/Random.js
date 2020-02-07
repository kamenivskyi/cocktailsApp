import React, { Component } from 'react';
import CocktailData from '../Cocktails/CocktailData';
import CocktailService from '../../services/CocktailService';

class Random extends Component {
  service = new CocktailService();

  state = {
    randomDrink: {},
    loading: true
  };

  componentDidMount() {
    this.getRandomDrink();
  }

  getRandomDrink = () => {
    this.service
      .getRandom()
      .then(randomDrink => this.setState({ randomDrink, loading: false }))
      .catch(this.onError);
  };

  render() {
    const { randomDrink, loading } = this.state;
    return <CocktailData cocktailInfo={randomDrink} loading={loading} />;
  }
}

export default Random;
