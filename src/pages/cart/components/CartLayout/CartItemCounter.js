import { Button, TextField } from "@mui/material";

export const CartItemCounter = ({
  itemQuantity,
  handleQuantityOnChange,
  handleItemQuantityDecrement,
  handleItemQuantityIncrement,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "230px",
      }}
    >
      <Button
        style={{ height: "56px" }}
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
        style={{ height: "56px" }}
        onClick={handleItemQuantityIncrement}
        variant="outlined"
        color="primary"
      >
        +
      </Button>
    </div>
  );
};
