import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions";
import { cloneDeep } from "lodash";

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  items: [],
  isLoading: false,
  errors: null,
};

export const cartReducer = handleActions(
  {
    [combineActions(
      actions.GET_CART_REQUEST,
      actions.UPDATE_CART_ITEM_REQUEST,
      actions.ADD_CART_ITEM_REQUEST,
      actions.REMOVE_CART_ITEM_REQUEST
    )]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CART_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      quantity: payload.response.quantity,
      items: payload.response.itemsList,
      totalPrice: payload.response.totalPrice,
    }),
    [actions.UPDATE_CART_ITEM_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;

      const itemsCopy = cloneDeep(state.items);

      const foundItem = itemsCopy.find((item) => item.id === updatedItem.id);

      foundItem.quantity = updatedItem.quantity;

      return {
        ...state,
        ...cartState,
        items: itemsCopy,
        isLoading: false,
      };
    },
    [actions.REMOVE_CART_ITEM_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;

      const itemsCopy = cloneDeep(state.items);

      const itemIndexToRemove = itemsCopy.findIndex(
        (item) => item.id === removedItemId
      );

      itemsCopy.splice(itemIndexToRemove, 1);

      return {
        ...state,
        ...cartState,
        items: itemsCopy,
        isLoading: false,
      };
    },
    [actions.ADD_CART_ITEM_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: payload.response.itemsList,
      quantity: payload.response.quantity,
      totalPrice: payload.response.totalPrice,
    }),
    [combineActions(
      actions.GET_CART_FAIL,
      actions.REMOVE_CART_ITEM_FAIL,
      actions.UPDATE_CART_ITEM_FAIL,
      actions.ADD_CART_ITEM_FAIL
    )]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
