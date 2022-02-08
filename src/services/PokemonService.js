import api from '../api/config';

export class PokemonService {
    static instance = new PokemonService();

    getPokemons() {
        return api.get('/products');
    }
}

export default PokemonService.instance;