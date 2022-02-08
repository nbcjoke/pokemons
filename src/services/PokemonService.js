import api from "../api/config";

export class PokemonService {
  static instance = new PokemonService();

  getPokemons(pageNumber) {
    return api.get(`/products?page=${pageNumber}`);
  }

  getPokemonDetails(pokemonId) {
    return api.get(`/products/${pokemonId}`);
  }
}

export default PokemonService.instance;
