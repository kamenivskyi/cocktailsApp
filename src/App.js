import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import CocktailService from './services/CocktailService';
import Navbar from './components/layout/Navbar';
import Search from './components/cocktails/Search';
import Alert from './components/layout/Alert';
import Filters from './components/cocktails/Filters';
import Random from './components/pages/Random';
import Categories from './components/pages/Categories';
import CategoryDrinks from './components/pages/CategoryDrinks';
import About from './components/pages/About';
import Cocktails from './components/cocktails/Cocktails';
import Cocktail from './components/cocktails/Cocktail';
import './App.css';

class App extends Component {
  service = new CocktailService();
  defaultCocktail = 'coffee';

  state = {
    drinks: [],
    cocktailInfo: {},
    term: '',
    error: false,
    alert: null,
    loading: true
  };

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
                    <>
                      <div className='form-row'>
                        <Search
                          searchDrinks={this.searchDrinks}
                          setAlert={this.setAlert}
                        />
                        <Filters onFilterChange={this.onFilterChange} />
                      </div>
                      <Cocktails
                        {...props}
                        cocktails={visibleDrinks}
                        loading={loading}
                      />
                    </>
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
