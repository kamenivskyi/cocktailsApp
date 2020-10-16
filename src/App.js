import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DrinkContainer from './pages/DrinkContainer';
import RandomContainer from './pages/RandomContainer';
import CategoriesContainer from './pages/CategoriesContainer';
import CategoryDrinksContainer from './pages/CategoryDrinksContainer';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/layout/Navbar/Navbar';
import Alert from './components/layout/Alert';
import ErrorBoundary from './components/helpers/ErrorBoundary';
import CocktailService from './services/CocktailService';

import './App.css';

const App = () => {
  const [term, setTerm] = useState('');
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);

  const DEFAULT_DRINK_NAME = 'martini';

  const getDrinks = useCallback((name) => {
    const { getDrinksByName } = CocktailService;

    setLoading(true);

    getDrinksByName(name).then(drinks => {
      setLoading(false);
      setError(false);
      setItems(drinks);

    }).catch(handleError);

  }, []);

  useEffect(() => {
    let cancell = false;

    if (!cancell) {
      getDrinks(DEFAULT_DRINK_NAME)
    }

    return () => { cancell = true };
  }, [getDrinks]);

  const handleError = err => {
    setError(true);
    setLoading(false);
    console.log('Error: ', err);
  };


  const onFilterChange = term => setTerm(term);

  const filterCocktails = (items, term) => {
    if (!term.length) {
      return items;
    }
    const visibleItems = items.filter(({ name }) => {
      return name.toLowerCase().includes(term.toLowerCase());
    });

    return visibleItems;
  };

  const generateAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000);
  };

  const visibleDrinks = filterCocktails(items, term);

  return (
    <ErrorBoundary>
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
                      items={visibleDrinks}
                      error={error}
                      loading={loading}
                      {...props}
                    />
                  )}
                />
                <Route exact path='/random' component={RandomContainer} />
                <Route exact path='/categories' component={CategoriesContainer} />
                <Route exact path='/category/:name' component={CategoryDrinksContainer} />
                <Route exact path='/drink/:id' component={DrinkContainer} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
