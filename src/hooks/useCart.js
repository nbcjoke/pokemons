import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  GET_CART_REQUEST,
  ADD_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
} from "../pages/cart/actions";

import { CartSelector } from "../pages/cart/selectors";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(CartSelector);

  const getCartState = useCallback(() => {
    dispatch(GET_CART_REQUEST());
  }, []);

  const addItemToCart = useCallback(
    ({ id, name, image, price, totalPrice }) => {
      dispatch(
        ADD_CART_ITEM_REQUEST({
          id,
          name,
          image,
          price,
          quantity: 1,
          totalPrice,
        })
      );
    },
    []
  );

  const removeItemFromCart = useCallback((itemId) => {
    dispatch(REMOVE_CART_ITEM_REQUEST(itemId));
  }, []);

  const updateCartItem = useCallback((id, quantity) => {
    dispatch(UPDATE_CART_ITEM_REQUEST({ id, quantity }));
  }, []);

  return {
    cartState,
    getCartState,
    addItemToCart,
    removeItemFromCart,
    updateCartItem,
  };
};
