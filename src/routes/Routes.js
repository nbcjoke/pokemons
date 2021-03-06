import { Route, Routes } from "react-router-dom";

import { PokemonsPageContainer } from "../pages/Pokemons/containers/PokemonsPageContainer";
import { LoginContainer } from "../pages/login/containers/LoginContainer";
import { SignUpContainer } from "../pages/signUp/containers/SignUpContainer";
import { PokemonDetailsContainer } from "../pages/PokemonDetails/containers/PokemonDetailsContainer";

import { PrivateRoute } from "./PrivateRoute";
import { ROUTE_NAMES } from "./routeNames";
import { setNavigator } from "../services/NavigationService";
import { useNavigate } from "react-router-dom";
import { CartPageContainer } from "../pages/cart/containers/CartPageContainer";

export const Router = () => {
  const navigate = useNavigate();
  setNavigator(navigate);

  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<LoginContainer />} />
      <Route path={ROUTE_NAMES.SIGNUP} element={<SignUpContainer />} />
      <Route
        path={ROUTE_NAMES.POKEMONS}
        element={
          <PrivateRoute>
            <PokemonsPageContainer />
          </PrivateRoute>
        }
      />
      <Route path={ROUTE_NAMES.HOME} />
      <Route
        path={ROUTE_NAMES.POKEMONS_DETAIL}
        element={<PokemonDetailsContainer />}
      />
      <Route path={ROUTE_NAMES.CART} element={<CartPageContainer />} />
    </Routes>
  );
};
