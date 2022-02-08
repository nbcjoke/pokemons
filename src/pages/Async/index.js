import { useFetching } from "../../hooks";
import { getPokemons } from './getPokemons.js';

export const AsyncPage = () => {
    const { response, isLoading } = useFetching(getPokemons);

    return (
        <div>
            <h1>Async Page</h1>
            <div>
                { isLoading ? (
                    <p>Load...</p>
                ) : (
                    <div>
                        {response?.results?.map(({name, url}) => (
                            <div key={url}>{name}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}