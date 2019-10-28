import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CocktailItem from "./components/CocktailItem";
import Cocktails from "./components/Cocktails";
import Cocktail from "./components/Cocktail";
import "./App.css";

class App extends React.Component {
  state = {
    cocktails: [],
    cocktailInfo: null,
    loading: false
  };
  defaultCocktail = "milk";

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.defaultCocktail}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          cocktails: res.drinks,
          loading: false
        })
      )
      .catch(err => console.log("Error: ", err));
  }
  onMoreDetails = id => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => console.log(res.drinks[0]));
    console.log("id: ", id);
  };
  render() {
    const { cocktails, loading } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Cocktails
              cocktails={cocktails}
              onMoreDetails={this.onMoreDetails}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
