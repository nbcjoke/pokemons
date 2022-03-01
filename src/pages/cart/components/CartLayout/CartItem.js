import { Typography, IconButton, Box, Grid } from "@mui/material";
import { FormatValues } from "../../../../utils/formatValues";
import { Delete } from "@mui/icons-material";
import { ItemCounterContainer } from "../../containers/ItemCounterContainer";

import styles from "./style.module.css";

export const CartItem = ({ items, removeItemFromCart }) => {
  return (
    <div className={styles.wrapper__cart}>
      <div className={styles.cart}>
        {items.map((pokemon) => (
          <Box className={styles.cart__wrapper}>
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
            <Grid className={styles.wrapper__counter}>
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

              <div className={styles.wrapper__button}>
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
