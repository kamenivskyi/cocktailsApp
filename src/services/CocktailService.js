class CocktailService {
  _apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

  async _getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  getRandom = async () => {
    const random = await this._getResource(`/random.php`);

    return this._normalizeDrinkObject(random.drinks[0]);
  };

  getDrinkById = async id => {
    const res = await this._getResource(`/lookup.php?i=${id}`);

    return this._normalizeDrinkObject(res.drinks[0]);
  };

  getDrinksByName = async name => {
    const res = await this._getResource(`/search.php?s=${name}`);

    return res.drinks.map(drinkObj => this._normalizeDrinkObject(drinkObj));
  };

  getCategories = async () => {
    const categories = await this._getResource('/list.php?c=list');

    return categories.drinks.map(category => this._normalizeCategory(category));
  };

  getCategoryDrinks = async category => {
    const res = await this._getResource(`/filter.php?c=${category}`);
    console.log(res.drinks);

    return res.drinks.map(drinkObj => this._normalizeDrinkObject(drinkObj));
  };

  _normalizeCategory = (categories) => ({
    category: categories.strCategory
  })

  _normalizeDrinkObject = (drinkObj) => {
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
    } = drinkObj;

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
