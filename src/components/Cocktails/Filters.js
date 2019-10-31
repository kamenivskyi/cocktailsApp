import React, { Component } from "react";
import PropTypes from "prop-types";

class Filters extends Component {
  state = {
    value: ""
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value }, () => this.props.onFilterChange(this.state.value));
  };
  render() {
    return (
      <div className="form-group col-md-6">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Filter cocktails by name"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default Filters;
