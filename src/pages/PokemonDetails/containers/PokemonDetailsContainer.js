import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { pokemonDetailsSelector } from "../selectors";
import { PokemonDetailsLayout } from "../components/PokemonDetailsLayout";

export const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();

  const { info, isLoading } = useSelector(pokemonDetailsSelector);

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonId));
  }, []);
  return (
    <>
      <PokemonDetailsLayout info={info} isLoading={isLoading} />
    </>
  );
};
