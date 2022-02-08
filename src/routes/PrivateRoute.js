import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ROUTE_NAMES } from './routeNames';
import { authSelector } from '../pages/login/selectors';

export const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector(authSelector)

    return isAuth ? children : <Navigate to={'../' + ROUTE_NAMES.LOGIN} />;
}

