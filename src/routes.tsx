import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import DrinkPage from "pages/DrinkPage";
import RandomDrinkPage from "pages/RandomDrinkPage";
import CategoriesPage from "pages/CategoriesPage";
import CategoryDrinksPage from "pages/CategoryDrinksPage";
import AboutPage from "pages/AboutPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/random" component={RandomDrinkPage} />
    <Route exact path="/categories" component={CategoriesPage} />
    <Route exact path="/category/:name" component={CategoryDrinksPage} />
    <Route exact path="/drink/:id" component={DrinkPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
export default Routes;
