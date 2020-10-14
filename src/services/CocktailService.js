class CocktailService {
  _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url} , received ${res.status}`);
    }
    return await res.json();
  }
  getRandom = async () => {
    const random = await this.getResource(`/random.php`);

    return this._normalizeDrink(random.drinks[0]);
  };
  getDrinkById = async id => {
    const res = await this.getResource(`/lookup.php?i=${id}`);

    return this._normalizeDrink(res.drinks[0]);
  };
  getDrinksByName = async name => {
    const res = await this.getResource(`/search.php?s=${name}`);
    console.log(res.drinks.map(drinkObj => this._normalizeDrink(drinkObj)))

    return res.drinks;
  };
  getCategories = async () => {
    const categories = await this.getResource('/list.php?c=list');
    return categories.drinks;
  };
  getCategoryDrinks = async category => {
    const res = await this.getResource(`/filter.php?c=${category}`);
    return res.drinks;
  };

  _normalizeDrink = (object) => {
    const {
      idDrink,
      strDrink,
      strInstructions,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strCategory,
      strIBA,
      ...restProps
    } = object;

    const tempIngredients = this._getCorrectProps(restProps, 'strIngredient');
    const tempMeasures = this._getCorrectProps(restProps, 'strMeasure');

    return {
      id: idDrink,
      imgUrl: strDrinkThumb,
      name: strDrink,
      instructions: strInstructions,
      type: strAlcoholic,
      glass: strGlass,
      category: strCategory,
      iba: strIBA,
      ingredsAndMeasures: this._getIngredientsWithMeasures(tempIngredients, tempMeasures),
    }
  }

  _getIngredientsWithMeasures = (ingredients, measures) => {
    const result = [];

    for (let i = 0; i < ingredients.length; i++) {
      const measure = measures[i] ? measures[i] : '';

      result.push({ ingredient: ingredients[i], measure });
    }

    return result;
  }

  _getCorrectProps = (arr, propName) => {
    const correctProps = [];

    for (let key in arr) {
      const isCorrectProp = key.includes(propName) && arr[key];

      if (isCorrectProp) {
        correctProps.push(arr[key]);
      }
    }

    return correctProps;
  }

}

export default new CocktailService();
