import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import Random from "./components/pages/Random";
import About from "./components/pages/About";
import Cocktails from "./components/cocktails/Cocktails";
import Cocktail from "./components/cocktails/Cocktail";
import "./App.css";

class App extends Component {
  state = {
    cocktails: [],
    cocktailInfo: {},
    randomCocktail: {},
    alert: null,
    loading: false
  };
  defaultCocktail = "coffee";

  async componentDidMount() {
    this.setState({ loading: true });
    await fetch(
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
  onMoreDetails = async id => {
    this.setState({ cocktailInfo: {}, loading: true });
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({ cocktailInfo: res.drinks[0], loading: false })
      )
      .catch(err => console.log("Error: ", err));
  };

  searchCocktails = async name => {
    this.setState({ loading: true });
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    )
      .then(res => res.json())
      .then(res => this.setState({ cocktails: res.drinks, loading: false }));
  };
  getRandomCocktail = async () => {
    this.setState({ loading: true });
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
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
      loading
    } = this.state;

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
                      <Search
                        searchCocktails={this.searchCocktails}
                        setAlert={this.setAlert}
                      />
                      <Cocktails
                        {...props}
                        cocktails={cocktails}
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
                      randomCocktail={randomCocktail}
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
