import { useState, useCallback, useEffect } from "react";

import { CartItemCounter } from "../components/CartLayout/CartItemCounter";
import { useCart } from "../../../hooks";

export const ItemCounterContainer = (pokemon) => {
  const { updateCartItem, cartState } = useCart();
  const { id, quantity, items } = cartState;

  const [itemQuantity, setItemQuantity] = useState(pokemon.quantity);

  const handleQuantityOnChange = (e) => {
    setItemQuantity(Number(e.target.value));
  };

  const handleItemQuantityIncrement = () => {
    setItemQuantity((itemQuantity) => itemQuantity + 1);
  };

  const handleItemQuantityDecrement = () => {
    setItemQuantity((itemQuantity) => itemQuantity - 1);
  };

  useEffect(() => {
    updateCartItem(pokemon.id, itemQuantity);
  }, [itemQuantity]);

  return (
    <CartItemCounter
      itemQuantity={itemQuantity}
      handleQuantityOnChange={handleQuantityOnChange}
      handleItemQuantityIncrement={handleItemQuantityIncrement}
      handleItemQuantityDecrement={handleItemQuantityDecrement}
    />
  );
};
