import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CocktailService from "./services/CocktailService";
import Navbar from "./components/layout/Navbar";
import Search from "./components/cocktails/Search";
import Alert from "./components/layout/Alert";
import Filters from "./components/cocktails/Filters";
import Random from "./components/pages/Random";
import About from "./components/pages/About";
import Cocktails from "./components/cocktails/Cocktails";
import Cocktail from "./components/cocktails/Cocktail";
import "./App.css";

class App extends Component {
  cocktailService = new CocktailService();
  defaultCocktail = "coffee";

  state = {
    cocktails: [],
    cocktailInfo: {},
    randomCocktail: {},
    term: "",
    alert: null,
    loading: true
  };

  componentDidMount() {
    this.cocktailService
      .getDrinksByName(this.defaultCocktail)
      .then(res => this.setState({ cocktails: res.drinks, loading: false }))
      .catch(err => console.log("Error: ", err));
  }

  searchCocktails = name => {
    this.setState({ loading: true });
    this.cocktailService
      .getDrinksByName(name)
      .then(res => this.setState({ cocktails: res.drinks, loading: false }));
  };

  onFilterChange = term => {
    this.setState({ term });
  };

  filterCocktails = (items, term) => {
    if (!term.length) {
      return items;
    }
    return items.filter(({ strDrink }) => {
      return strDrink.toLowerCase().includes(term.toLowerCase());
    });
  };

  onMoreDetails = id => {
    this.setState({ cocktailInfo: {}, loading: true });
    this.cocktailService
      .getDrinkById(id)
      .then(res =>
        this.setState({ cocktailInfo: res.drinks[0], loading: false })
      )
      .catch(err => console.log("Error: ", err));
  };

  getRandomCocktail = () => {
    this.setState({ loading: true });
    this.cocktailService
      .getRandom()
      .then(res =>
        this.setState({ randomCocktail: res.drinks[0], loading: false })
      )
      .catch(err => console.log(err));
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const {
      cocktails,
      cocktailInfo,
      randomCocktail,
      alert,
      term,
      loading
    } = this.state;
    const visibleCocktails = this.filterCocktails(cocktails, term);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <div className="pt-4">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <>
                      <div className="form-row">
                        <Search
                          searchCocktails={this.searchCocktails}
                          setAlert={this.setAlert}
                        />
                        <Filters onFilterChange={this.onFilterChange} />
                      </div>
                      <Cocktails
                        {...props}
                        cocktails={visibleCocktails}
                        loading={loading}
                      />
                    </>
                  )}
                />
                <Route
                  exact
                  path="/cocktail/:id"
                  render={props => (
                    <Cocktail
                      {...props}
                      cocktailInfo={cocktailInfo}
                      onMoreDetails={this.onMoreDetails}
                      loading={loading}
                    />
                  )}
                />
                <Route
                  path="/random"
                  render={props => (
                    <Random
                      getRandomCocktail={this.getRandomCocktail}
                      cocktailInfo={randomCocktail}
                      loading={loading}
                    />
                  )}
                />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
