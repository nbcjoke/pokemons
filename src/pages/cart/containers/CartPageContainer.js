import { CartLayout } from "../components/CartLayout";
import { useCart } from "../../../hooks";
import { useEffect } from "react";

export const CartPageContainer = () => {
  const { cartState, getCartState, removeItemFromCart, updateCartItem } =
    useCart();

  const { items, quantity, totalPrice } = cartState;

  useEffect(() => {
    getCartState();
  }, []);

  return (
    <div style={{ marginTop: "120px", color: "white" }}>
      <CartLayout
        items={items}
        removeItemFromCart={removeItemFromCart}
        updateCartItem={updateCartItem}
        totalPrice={totalPrice}
        quantity={quantity}
      />
    </div>
  );
};
