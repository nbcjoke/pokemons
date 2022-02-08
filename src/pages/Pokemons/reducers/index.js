import * as actions from "../actions";
import { handleActions } from "redux-actions";

const defaultState = {
  pokemonsList: [],
  isLoading: false,
  errors: null,
};

export const pokemonsPageReducer = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonsList: payload.response,
    }),
    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
