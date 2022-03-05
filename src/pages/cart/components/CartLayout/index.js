import { Divider, Typography, Button } from "@mui/material";

import { CartItem } from "./CartItem";

import styles from "./style.module.css";

export const CartLayout = ({
  items,
  removeItemFromCart,
  updateCartItem,
  totalPrice,
  quantity,
}) => {
  return (
    <div>
      <div className={styles.wrapper__title}>
        <Divider variant="fullWidth">
          <Typography variant="h4">Cart</Typography>
        </Divider>
      </div>
      <div className={styles.wrapper__description}>
        <Typography variant="h6">
          On this page u can choose amount and buy our products
        </Typography>
      </div>
      <div className={styles.cart__container}>
        <CartItem
          items={items}
          removeItemFromCart={removeItemFromCart}
          updateCartItem={updateCartItem}
          totalPrice={totalPrice}
          quantity={quantity}
        />
        <div className={styles.info__block}>
          <h1>{`Total Price: ${totalPrice}$`}</h1>
          <h1>{`Quantity: ${quantity}`}</h1>
          <Button className={styles.block__button} variant="outlined">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
