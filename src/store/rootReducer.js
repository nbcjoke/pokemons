import { combineReducers } from "redux";
import { pokemonsPageReducer } from "../pages/Pokemons/reducers";
import { authReducer } from "../pages/login/reducers";
import { signUpReducer } from "../pages/signUp/reducers";
import { pokemonDetailsReducer } from "../pages/PokemonDetails/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  pokemonsPage: pokemonsPageReducer,
  signUp: signUpReducer,
  pokemonDetails: pokemonDetailsReducer,
});

export default rootReducer;
