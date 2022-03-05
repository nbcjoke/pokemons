import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { pokemonDetailsSelector } from "../selectors";
import { PokemonDetailsLayout } from "../components/PokemonDetailsLayout";

import { useCart } from "../../../hooks";

export const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();

  const { info, isLoading } = useSelector(pokemonDetailsSelector);
  const { addItemToCart } = useCart();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonId));
  }, []);
  return (
    <>
      <PokemonDetailsLayout
        info={info}
        isLoading={isLoading}
        addItemToCart={addItemToCart}
      />
    </>
  );
};
