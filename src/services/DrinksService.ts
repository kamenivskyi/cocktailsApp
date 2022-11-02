import { TServerDrink, IServerCategory } from "interfaces/serverResponse";

class DrinksService {
  _apiBase = "https://www.thecocktaildb.com/api/json/v1/1";

  private async _getResource(url: string) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  getRandom = async () => {
    const random = await this._getResource(`/random.php`);
    const [drink] = random.drinks;

    return this.normalizeDrinkObject(drink);
  };

  getDrinkById = async (id: string) => {
    const res = await this._getResource(`/lookup.php?i=${id}`);
    const [drink] = res.drinks;

    return this.normalizeDrinkObject(drink);
  };

  getDrinksByName = async (name: string) => {
    const res = await this._getResource(`/search.php?s=${name}`);

    return res && res.drinks && res.drinks.length > 0
      ? res.drinks.map((drinkObj: TServerDrink) =>
          this.normalizeDrinkObject(drinkObj)
        )
      : [];
  };

  getCategories = async () => {
    const categories = await this._getResource("/list.php?c=list");

    return categories.drinks.map((category: IServerCategory) =>
      this.normalizeCategory(category)
    );
  };

  getCategoryDrinks = async (category: IServerCategory) => {
    const res = await this._getResource(`/filter.php?c=${category}`);

    return res.drinks.map((drinkObj: TServerDrink) =>
      this.normalizeDrinkObject(drinkObj)
    );
  };

  private normalizeCategory = (category: IServerCategory) => ({
    category: category.strCategory,
  });

  private normalizeDrinkObject = (drinkObj: TServerDrink) => {
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

    const tempIngredients = this._getCorrectProps(restProps, "strIngredient");
    const tempMeasures = this._getCorrectProps(restProps, "strMeasure");
    const ingredsAndMeasures = this.getIngredientsWithMeasures(
      tempIngredients,
      tempMeasures
    );

    return {
      id: idDrink,
      imgUrl: strDrinkThumb,
      name: strDrink,
      instructions: strInstructions,
      type: strAlcoholic,
      glass: strGlass,
      category: strCategory,
      iba: strIBA,
      ingredsAndMeasures,
    };
  };

  private getIngredientsWithMeasures = (
    ingredPropsArr: string[],
    measuresPropsArr: string[]
  ) => {
    return ingredPropsArr.map((_, idx) => {
      const measure = measuresPropsArr[idx] ? measuresPropsArr[idx] : "";

      return { ingredient: ingredPropsArr[idx], measure };
    });
  };

  _getCorrectProps = (obj: Record<string, any>, propName: string) => {
    const result = Object.keys(obj)
      .filter((key: string) => key.includes(propName) && obj[key])
      .map((key) => obj[key]);

    return result;
  };
}

export default new DrinksService();
