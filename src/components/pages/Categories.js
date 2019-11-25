import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class Categories extends PureComponent {
  state = {
    value: ''
  };
  componentDidMount() {
    this.props.getCategories();
  }

  // handleClick = e => {
  //   this.setState({ value: e.target.name }, () => {
  //     this.props.filterByCategory(this.state.value);
  //   });
  // };

  render() {
    const { categories, loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <>
        <div className='list-group'>
          {categories.map(({ strCategory }) => (
            <Link
              to={`/category/${strCategory}`}
              className='list-group-item list-group-item-action'
              key={Math.random()}
            >
              {strCategory}
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default Categories;
