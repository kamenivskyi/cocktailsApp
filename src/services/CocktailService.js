class CocktailService {
  API_BASE = "https://www.thecocktaildb.com/api/json/v1/1";
  async getResource(url) {
    const res = await fetch(`${this.API_BASE}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch: ${url} , received ${res.status}`);
    }
    return await res.json();
  }
  async getRandom() {
    const res = await this.getResource(`/random.php`);
    return res;
  }
  async getDrinkById(id) {
    const res = await this.getResource(`/lookup.php?i=${id}`);
    return res;
  }
  async getDrinksByName(name) {
    const res = await this.getResource(`/search.php?s=${name}`);
    return res;
  }
  async getCategories() {
    const res = await this.getResource("/list.php?c=list");
    return res;
  }
}
export default CocktailService;
