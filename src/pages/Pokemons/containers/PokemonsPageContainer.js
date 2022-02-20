import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors";
import { useEffect } from "react";

import { PokemonsLayout } from "../components/PokemonsLayout";
import { usePagination } from "../../../hooks";

import { GET_POKEMONS_REQUEST } from "../actions";

export const PokemonsPageContainer = () => {
  const dispatch = useDispatch();
  const [page, handlePageChange] = usePagination("pokemonsPage");

  const { isLoading, errors, pokemonsList } = useSelector(pokemonPageSelector);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(page));
  }, [page]);

  return (
    <PokemonsLayout
      pokemonsList={pokemonsList}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
