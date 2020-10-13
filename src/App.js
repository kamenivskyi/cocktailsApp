import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CocktailService from './services/CocktailService';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Cocktail from './components/Cocktails/Cocktail';

import Home from './pages/Home';
import Random from './pages/Random';
import Categories from './pages/Categories';
import CategoryDrinks from './pages/CategoryDrinks';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

const App = () => {
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const { getDrinksByName } = CocktailService;

  const DEFAULT_DRINK_NAME = 'coffee';

  useEffect(() => {
    let cancell = false;

    if (!cancell) {
      getDrinks(DEFAULT_DRINK_NAME)
    }

    return () => { cancell = true };
  }, []);

  const onError = err => {
    setError(true);
    console.log('Error: ', err);
  };

  const getDrinks = name => {
    getDrinksByName(name).then(drinks => {
      setLoading(false);
      setDrinks(drinks);

    }).catch(onError);
  };

  const onFilterChange = term => setTerm(term);

  const filterCocktails = (items, term) => {
    if (!term.length) {
      return items;
    }
    const visibleItems = items.filter(({ strDrink }) => {
      return strDrink.toLowerCase().includes(term.toLowerCase());
    });

    return visibleItems;
  };

  const generateAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000);
  };

  const visibleDrinks = filterCocktails(drinks, term);

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
                    getDrinks={getDrinks}
                    generateAlert={generateAlert}
                    onFilterChange={onFilterChange}
                    cocktails={visibleDrinks}
                    loading={loading}
                    {...props}
                  />
                )}
              />
              <Route exact path='/random' component={Random} />
              <Route exact path='/categories' component={Categories} />
              <Route path='/category/:name' component={CategoryDrinks} />
              <Route exact path='/cocktail/:id' component={Cocktail} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
