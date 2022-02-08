import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import { Pagination } from "../../../../components/Pagination";
import {
  Divider,
  Typography,
  IconButton,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import "./style.css";

export const PokemonsLayout = ({ pokemonsList, page, handlePageChange }) => {
  return (
    <div>
      <div className="products__wrapper-title">
        <Divider variant="fullWidth">
          <Typography variant="h4">Products</Typography>
        </Divider>
      </div>
      <div className="products__wrapper-description">
        <Typography variant="h6">
          On this page u can choose and buy our products
        </Typography>
      </div>
      <div className="products__wrapper">
        {pokemonsList.map(({ id, name, price, image }) => (
          <Box className="card__wrapper">
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Link
                    className="card__wrapper-link"
                    key={name}
                    to={`${ROUTE_NAMES.POKEMONS}/${id}`}
                  >
                    <Typography variant="h6">{name}</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    className="card__wrapper-price"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {price}$
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="card__wrapper-info" variant="body2">
                Pinstriped cornflower blue cotton blouse takes you on a walk to
                the park or just down the hall.
              </Typography>
            </Box>
            <Grid className="card__wrapper-image">
              <img alt="pokemons" src={image}></img>
            </Grid>
            <Box className="card__wrapper-buttons">
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
      <div className="products__wrapper-pagination">
        <Pagination currentPage={page} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};
