import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createAction("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");

export const UPDATE_CART_ITEM_REQUEST = createAction(
  "UPDATE_CART_ITEM_REQUEST"
);
export const UPDATE_CART_ITEM_SUCCESS = createAction(
  "UPDATE_CART_ITEM_SUCCESS"
);
export const UPDATE_CART_ITEM_FAIL = createAction("UPDATE_CART_ITEM_FAIL");

export const ADD_CART_ITEM_REQUEST = createAction("ADD_CART_ITEM_REQUEST");
export const ADD_CART_ITEM_SUCCESS = createAction("ADD_CART_ITEM_SUCCESS");
export const ADD_CART_ITEM_FAIL = createAction("ADD_CART_ITEM_FAIL");

export const REMOVE_CART_ITEM_REQUEST = createAction(
  "REMOVE_CART_ITEM_REQUEST"
);
export const REMOVE_CART_ITEM_SUCCESS = createAction(
  "REMOVE_CART_ITEM_SUCCESS"
);

export const REMOVE_CART_ITEM_FAIL = createAction("REMOVE_CART_ITEM_FAIL");
