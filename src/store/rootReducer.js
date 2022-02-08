import { combineReducers } from "redux";
import { pokemonsPageReducer } from "../pages/Pokemons/reducers";
import { authReducer } from "../pages/login/reducers";
import { signUpReducer } from "../pages/signUp/reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    pokemonsPage: pokemonsPageReducer,
    signUp: signUpReducer,
});

export default rootReducer;