import { Divider, Typography } from "@mui/material";

import { PokemonCard } from "./PokemonCard";
import { Pagination } from "../../../../components/Pagination";

import styles from "./style.module.css";

export const PokemonsLayout = ({ pokemonsList, page, handlePageChange }) => {
  return (
    <div>
      <div className={styles["products__wrapper-title"]}>
        <Divider variant="fullWidth">
          <Typography variant="h4">Products</Typography>
        </Divider>
      </div>
      <div className={styles["products__wrapper-description"]}>
        <Typography variant="h6">
          On this page u can choose and buy our products
        </Typography>
      </div>
      <PokemonCard pokemonsList={pokemonsList} />
      <div className={styles["products__wrapper-pagination"]}>
        <Pagination currentPage={page} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};
