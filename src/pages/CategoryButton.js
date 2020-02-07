import React from "react";
import { Link } from "react-router-dom";

class CategoryButton extends React.Component {
  componentDidMount() {
    console.log(this.props.getCategoryItems());
  }
  render() {
    return (
      <Link
        to="/category"
        name={this.props.category}
        className="list-group-item list-group-item-action"
        //   onClick={this.handleClick}
      >
        {this.props.category}
      </Link>
    );
  }
}
export default CategoryButton;
