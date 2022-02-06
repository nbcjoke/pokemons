import { Snackbar, Button } from "@mui/material";
import { useState } from "react";

export const ToastSnackbar = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const button = (
    <Button
      onClick={handleClick({
        vertical: "bottom",
        horizontal: "left",
      })}
    >
      Bottom-Left
    </Button>
  );

  return (
    <div>
      {button}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
};
