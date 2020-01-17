import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import CocktailService from '../../services/CocktailService';

class Categories extends PureComponent {
  service = new CocktailService();

  state = {
    categories: [],
    loading: false,
    value: ''
  };
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    this.setState({ loading: true });
    this.service
      .getCategories()
      .then(categories => this.setState({ categories, loading: false }))
      .catch(this.onError);
  };

  render() {
    const { categories, loading } = this.state;
    if (loading) return <Spinner />;
    return (
      <div className='list-group'>
        {categories.map(({ strCategory }) => {
          const category = strCategory.replace(/[\.\/]/g, '/%20');
          // let result = strCategory.replace(/[\/]/g, '_').trim();
          // console.log(category);
          return (
            <Link
              to={`/category/${category}`}
              className='list-group-item list-group-item-action'
              key={Math.random()}
            >
              {strCategory}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Categories;
