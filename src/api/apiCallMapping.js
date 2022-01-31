import * as pokemonPageActions from '../pages/Pokemons/actions';
import * as loginActions from '../pages/login/actions';
import * as signUpActions from '../pages/signUp/actions';

import PokemonService from '../services/PokemonService';
import AuthService from '../services/AuthService';

export const apiCallMapping = (action) => {
    const actionCallMap = {
        [pokemonPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,

        [loginActions.SIGN_IN_REQUEST]: AuthService.signIn,

        [signUpActions.SIGN_UP_REQUEST]: AuthService.signUp,
    };

    if (!actionCallMap[action.type]) {
        throw new Error('Not Mapped Action');
    }

    return actionCallMap[action.type];
}