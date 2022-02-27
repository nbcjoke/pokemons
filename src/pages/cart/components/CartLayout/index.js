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
      <div style={{ margin: "180px 0 20px", color: "#fff" }}>
        <Divider variant="fullWidth">
          <Typography variant="h4">Cart</Typography>
        </Divider>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto 60px",
          color: "#fff",
        }}
      >
        <Typography variant="h6">
          On this page u can choose amount and buy our products
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CartItem
          items={items}
          removeItemFromCart={removeItemFromCart}
          updateCartItem={updateCartItem}
          totalPrice={totalPrice}
          quantity={quantity}
        />
        <div
          style={{
            padding: "40px",
            marginTop: "40px",
            borderRadius: "4px",
            backgroundColor: "#000",
            maxHeight: "234px",
            position: "sticky",
            top: "120px",
          }}
        >
          <h1>{`Total Price: ${totalPrice}$`}</h1>
          <h1>{`Quantity: ${quantity}`}</h1>
          <Button
            style={{ display: "flex", margin: "90px auto 0" }}
            variant="outlined"
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
