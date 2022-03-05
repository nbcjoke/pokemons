import { Button, TextField } from "@mui/material";

import styles from "./style.module.css";

export const CartItemCounter = ({
  itemQuantity,
  handleQuantityOnChange,
  handleItemQuantityDecrement,
  handleItemQuantityIncrement,
}) => {
  return (
    <div className={styles.wrapper__buttons}>
      <Button
        className={styles.buttons}
        onClick={handleItemQuantityDecrement}
        disabled={itemQuantity <= 1}
        variant="outlined"
        color="primary"
      >
        -
      </Button>
      <TextField
        type="number"
        onChange={handleQuantityOnChange}
        value={itemQuantity}
        color="primary"
        variant="outlined"
      ></TextField>
      <Button
        className={styles.buttons}
        onClick={handleItemQuantityIncrement}
        variant="outlined"
        color="primary"
      >
        +
      </Button>
    </div>
  );
};
