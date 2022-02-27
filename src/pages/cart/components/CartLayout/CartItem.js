import { Link } from "react-router-dom";

import {
  Typography,
  IconButton,
  Box,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { FormatValues } from "../../../../utils/formatValues";
import { Delete } from "@mui/icons-material";
import { ItemCounterContainer } from "../../containers/ItemCounterContainer";

import styles from "./style.module.css";

export const CartItem = ({ items, removeItemFromCart, updateCartItem }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", padding: "40px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {items.map((pokemon) => (
          <Box
            style={{
              width: "800px",
              borderRadius: "4px",
              padding: "0 10px",
              backgroundColor: "#000",
            }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography variant="h6">{pokemon.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{}}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    <FormatValues price={pokemon.price} />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                className={styles.card__image}
                alt="pokemons"
                src={pokemon.image}
              ></img>
              <div>
                <ItemCounterContainer
                  quantity={pokemon.quantity}
                  id={pokemon.id}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <IconButton onClick={() => removeItemFromCart(pokemon.id)}>
                  <Delete color="primary" />
                </IconButton>
              </div>
            </Grid>
          </Box>
        ))}
      </div>
    </div>
  );
};
