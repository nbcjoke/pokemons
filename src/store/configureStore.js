import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { LOCAL_STORAGE_KEYS } from '../constants/localStorageKeys';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
    const store = createStore(rootReducer, {auth: {isAuth: localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)}}, composeWithDevTools(applyMiddleware(...[sagaMiddleware])));

    sagaMiddleware.run(rootSaga);
    return store;
}