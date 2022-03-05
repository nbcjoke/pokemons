import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors";
import { useEffect } from "react";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { usePagination, useCart } from "../../../hooks";

import { GET_POKEMONS_REQUEST } from "../actions";

export const PokemonsPageContainer = () => {
  const dispatch = useDispatch();
  const [page, handlePageChange] = usePagination("pokemonsPage");

  const { pokemonsList } = useSelector(pokemonPageSelector);
  const { addItemToCart } = useCart();

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(page));
  }, [page]);

  return (
    <PokemonsLayout
      addItemToCart={addItemToCart}
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
