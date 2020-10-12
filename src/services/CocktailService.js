class CocktailService {
  API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

  async getResource(url) {
    const res = await fetch(`${this.API_BASE}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch: ${url} , received ${res.status}`);
    }
    return await res.json();
  }
  getRandom = async () => {
    const random = await this.getResource(`/random.php`);
    return random.drinks[0];
  };
  getDrinkById = async id => {
    const res = await this.getResource(`/lookup.php?i=${id}`);
    return res.drinks[0];
  };
  getDrinksByName = async name => {
    const res = await this.getResource(`/search.php?s=${name}`);
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
}

export default new CocktailService();
