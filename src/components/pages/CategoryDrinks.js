import React, { Component } from 'react';
import CocktailItem from '../cocktails/CocktailItem';
import CocktailService from '../../services/CocktailService';

class CategoryDrinks extends Component {
  service = new CocktailService();

  state = {
    items: [],
    loading: true
  };

  componentDidMount() {
    console.log(this.props.match.params);
    this.getByCategory(this.props.match.params.name);
  }

  getByCategory = category => {
    this.service.getByCategory(category).then(items =>
      this.setState({ items, loading: false }, () => {
        console.log(this.state.items);
      })
    );
  };

  render() {
    const { items } = this.state;
    return (
      <div className='row'>
        {items.map(item => (
          <CocktailItem item={item} key={Math.random()} />
        ))}
      </div>
    );
  }
}

export default CategoryDrinks;
