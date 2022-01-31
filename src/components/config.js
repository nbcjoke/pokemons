import { ROUTE_NAMES } from "../routes/routeNames";

export const NAVIGATION = {
    PUBLIC: [
        {
            title: "Login",
            path: ROUTE_NAMES.LOGIN,
        },
        {
            title: "SignUp",
            path: ROUTE_NAMES.SIGNUP,
        }
    ],
    PRIVATE: [
        {
            title: "Pokemons",
            path: ROUTE_NAMES.POKEMONS,
        },
    ],
};