import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { pokemonDetailsSelector } from "../selectors";

export const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { pokemonName } = useParams();

  const { info, isLoading } = useSelector(pokemonDetailsSelector);

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonName));
  }, []);
  return <div>{isLoading ? "loading..." : <h1>{info.name}</h1>}</div>;
};
