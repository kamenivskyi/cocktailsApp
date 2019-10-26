import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    cocktails: []
  };
  nameIngredient = "vodka";
  componentDidMount() {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.nameIngredient}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          cocktails: res.drinks
        })
      );
  }
  render() {
    console.log(this.state.cocktails);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {this.state.cocktails.map(cocktail => {
              return (
                <div className="col-4 mb-4" key={cocktail.idDrink}>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <h3>{cocktail.strDrink}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
