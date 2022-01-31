import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_POKEMONS_REQUEST } from "../actions";
import { ROUTE_NAMES } from "../../../routes/routeNames";


export const PokemonsPageContainer = () => {
    const dispatch = useDispatch();

    const { isLoading, errors, pokemonsList } = useSelector(pokemonPageSelector);

    useEffect(() => {
        dispatch(GET_POKEMONS_REQUEST());
    }, []);
    return (
        <div>
        {pokemonsList.map(({ id, name }) => (
            <Link key={name} to={`${ROUTE_NAMES.POKEMONS}/${id}`}>
                <div>{name}</div>
            </Link>
        ))}
    </div>
    );
};