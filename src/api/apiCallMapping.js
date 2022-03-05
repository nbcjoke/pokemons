import * as pokemonPageActions from "../pages/Pokemons/actions";
import * as loginActions from "../pages/login/actions";
import * as signUpActions from "../pages/signUp/actions";
import * as pokemonDetailsActions from "../pages/PokemonDetails/actions";
import * as cartActions from "../pages/cart/actions";

import PokemonService from "../services/PokemonService";
import AuthService from "../services/AuthService";
import CartService from "../services/cartService";

export const apiCallMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,

    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]:
      PokemonService.getPokemonDetails,

    [loginActions.SIGN_IN_REQUEST]: AuthService.signIn,

    [signUpActions.SIGN_UP_REQUEST]: AuthService.signUp,

    [cartActions.GET_CART_REQUEST]: CartService.getCart,
    [cartActions.ADD_CART_ITEM_REQUEST]: CartService.addItem,
    [cartActions.REMOVE_CART_ITEM_REQUEST]: CartService.removeItem,
    [cartActions.UPDATE_CART_ITEM_REQUEST]: CartService.updateItem,
  };

  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }

  return actionCallMap[action.type];
};
