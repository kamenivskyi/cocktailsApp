import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import CocktailService from './services/CocktailService';
import Navbar from './components/layout/Navbar';
import Search from './components/cocktails/Search';
import Alert from './components/layout/Alert';
import Filters from './components/cocktails/Filters';
import Random from './components/pages/Random';
import Categories from './components/pages/Categories';
import CategoryDrinks from './components/cocktails/CategoryDrinks';
import About from './components/pages/About';
import Cocktails from './components/cocktails/Cocktails';
import Cocktail from './components/cocktails/Cocktail';
import './App.css';

class App extends Component {
  service = new CocktailService();
  defaultCocktail = 'daiquiri';

  state = {
    drinks: [],
    categories: [],
    categoryItems: [],
    cocktailInfo: {},
    randomDrink: {},
    term: '',
    error: false,
    alert: null,
    loading: true
  };

  componentDidMount() {
    this.service
      .getDrinksByName(this.defaultCocktail)
      .then(drinks => this.setState({ drinks, loading: false }))
      .catch(this.onError);
  }
  onError = err => {
    this.setState({ error: true });
    console.log('Error: ', err);
  };

  searchDrinks = name => {
    this.setState({ loading: true });
    this.service
      .getDrinksByName(name)
      .then(drinks => this.setState({ drinks, loading: false }))
      .catch(this.onError);
  };

  onFilterChange = term => {
    this.setState({ term });
  };
  // getDrinksByName = (name) => {

  // }

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

  getRandomDrink = () => {
    this.setState({ loading: true });
    this.service
      .getRandom()
      .then(randomDrink => this.setState({ randomDrink, loading: false }))
      .catch(this.onError);
  };

  getCategories = () => {
    this.setState({ loading: true });
    this.service
      .getCategories()
      .then(categories => this.setState({ categories, loading: false }))
      .catch(this.onError);
  };

  getByCategory = category => {
    this.setState({ loading: true });
    this.service.getByCategory(category).then(drinks =>
      this.setState({ categoryItems: drinks, loading: false }, () => {
        console.log(this.state.categoryItems);
      })
    );
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const {
      drinks,
      categories,
      categoryItems,
      cocktailInfo,
      getRandomDrink,
      randomDrink,
      alert,
      term,
      loading
    } = this.state;

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
                <Route
                  path='/random'
                  render={props => (
                    <Random
                      getRandomDrink={this.getRandomDrink}
                      cocktailInfo={randomDrink}
                      loading={loading}
                    />
                  )}
                />
                <Route
                  path='/categories'
                  render={() => (
                    <Categories
                      getCategories={this.getCategories}
                      categories={categories}
                      loading={loading}
                      filterByCategory={this.filterByCategory}
                    />
                  )}
                />
                <Route
                  exact
                  path='/category/:name'
                  render={props => (
                    <CategoryDrinks
                      {...props}
                      categoryItems={categoryItems}
                      loading={loading}
                      getByCategory={this.getByCategory}
                    />
                  )}
                />
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
