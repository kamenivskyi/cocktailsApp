import React, { Component } from 'react';
import CocktailItem from './CocktailItem';
import CocktailService from '../../services/CocktailService';

class CategoryDrinks extends Component {
  service = new CocktailService();

  componentDidMount() {
    const { getByCategory, match } = this.props;
    console.log(this.props);
    getByCategory(match.params.name);
  }

  render() {
    const { categoryItems } = this.props;
    return (
      <div className='row'>
        {categoryItems.map(item => (
          <CocktailItem item={item} key={Math.random()} />
        ))}
      </div>
    );
  }
}

export default CategoryDrinks;
