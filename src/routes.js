import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrinkContainer from './pages/DrinkContainer';
import RandomContainer from './pages/RandomContainer';
import CategoriesContainer from './pages/CategoriesContainer';
import CategoryDrinksContainer from './pages/CategoryDrinksContainer';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/random' component={RandomContainer} />
    <Route exact path='/categories' component={CategoriesContainer} />
    <Route exact path='/category/:name' component={CategoryDrinksContainer} />
    <Route exact path='/drink/:id' component={DrinkContainer} />
    <Route exact path='/about' component={About} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
