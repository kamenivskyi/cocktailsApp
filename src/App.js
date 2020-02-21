import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CocktailService from './services/CocktailService';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import Search from './components/Cocktails/Search';
import Filters from './components/Cocktails/Filters';
import Cocktails from './components/Cocktails/Cocktails';
import Cocktail from './components/Cocktails/Cocktail';

import Home from './pages/Home';
import Random from './pages/Random';
import Categories from './pages/Categories';
import CategoryDrinks from './pages/CategoryDrinks';
import About from './pages/About';

import withData from './components/hoc-helpers';

import './App.css';

class App extends Component {
  state = {
    drinks: [],
    cocktailInfo: {},
    term: '',
    error: false,
    alert: null,
    loading: true
  };
  defaultCocktail = 'coffee';
  service = new CocktailService();

  componentDidMount() {
    this.getDrinksByName(this.defaultCocktail);
  }

  onError = err => {
    this.setState({ error: true });
    console.log('Error: ', err);
  };

  searchDrinks = name => {
    this.setState({ loading: true });
    this.getDrinksByName(name);
  };

  onFilterChange = term => this.setState({ term });

  getDrinksByName = name => {
    this.service
      .getDrinksByName(name)
      .then(drinks => this.setState({ drinks, loading: false }))
      .catch(this.onError);
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
    this.setState({ loading: true });
    this.service
      .getDrinkById(id)
      .then(cocktailInfo => this.setState({ cocktailInfo, loading: false }))
      .catch(this.onError);
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { drinks, cocktailInfo, alert, term, loading } = this.state;

    const visibleDrinks = this.filterCocktails(drinks, term);

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container-fluid'>
            <div className='pt-4'>
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Home
                      searchDrinks={this.searchDrinks}
                      setAlert={this.setAlert}
                      onFilterChange={this.onFilterChange}
                      cocktails={visibleDrinks}
                      loading={loading}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path='/cocktail/:id'
                  render={props => (
                    <Cocktail
                      {...props}
                      cocktailInfo={cocktailInfo}
                      onMoreDetails={this.onMoreDetails}
                      loading={loading}
                    />
                  )}
                />
                <Route exact path='/random' component={Random} />
                <Route exact path='/categories' component={Categories} />
                <Route path='/category/:name' component={CategoryDrinks} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
