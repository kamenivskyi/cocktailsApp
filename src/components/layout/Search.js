import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    value: ""
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = event => {
    const { value } = this.state;
    const { searchCocktails, setAlert } = this.props;

    event.preventDefault();
    value.trim().length > 0
      ? searchCocktails(value)
      : setAlert("Please type something", "danger");
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type the name of the cocktail"
            aria-label="Search cocktails"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
Search.propTypes = {
  searchCocktails: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
