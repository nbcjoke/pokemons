import { Link } from "react-router-dom";

import { Typography, IconButton, Box, Grid, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ROUTE_NAMES } from "../../../../routes/routeNames";
import { FormatValues } from "../../../../utils/formatValues";

import styles from "./style.module.css";

export const PokemonCard = ({ pokemonsList }) => {
  return (
    <div>
      <div className={styles.products__wrapper}>
        {pokemonsList.map(({ id, name, price, image }) => (
          <Box className={styles.card__wrapper}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Link
                    className={styles["card__wrapper-link"]}
                    key={name}
                    to={`${ROUTE_NAMES.POKEMONS}/${id}`}
                  >
                    <Typography variant="h6">{name}</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles["card__wrapper-price"]}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    <FormatValues price={price} />
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                className={styles["card__wrapper-info"]}
                variant="body2"
              >
                Pinstriped cornflower blue cotton blouse takes you on a walk to
                the park or just down the hall.
              </Typography>
            </Box>
            <Grid className={styles["card__wrapper-image"]}>
              <img alt="pokemons" src={image}></img>
            </Grid>
            <Box className={styles["card__wrapper-buttons"]}>
              <Button color="primary" variant="outlined">
                Buy
              </Button>
              <IconButton>
                <ShoppingCart color="primary" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};
