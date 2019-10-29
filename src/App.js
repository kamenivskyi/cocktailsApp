import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";
import Cocktail from "./components/Cocktail";
import "./App.css";

class App extends Component {
  state = {
    cocktails: [],
    cocktailInfo: {},
    loading: false
  };
  defaultCocktail = "coffee";

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
    this.setState({ cocktailInfo: {}, loading: true });
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({ cocktailInfo: res.drinks[0], loading: false })
      );
  };
  render() {
    const { cocktails, cocktailInfo, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <div className="row pt-4">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Cocktails
                      {...props}
                      cocktails={cocktails}
                      onMoreDetails={this.onMoreDetails}
                      loading={loading}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cocktail"
                  render={props => (
                    <Cocktail
                      {...props}
                      cocktailInfo={cocktailInfo}
                      loading={loading}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
