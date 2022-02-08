import * as actions from "../actions";
import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

const defaultState = {
  isLoading: false,
  error: null,
  userData: {},
  isAuth: localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
  accessToken: null,
  isOpened: false,
};

export const authReducer = handleActions(
  {
    [actions.SIGN_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      const { accessToken, ...userData } = payload.response;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData,
        accessToken,
      };
    },
    [actions.SIGN_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
    [actions.OPEN_MODAL]: (state) => ({
      ...state,
      isOpened: true,
    }),
    [actions.CLOSE_MODAL]: (state) => ({
      ...state,
      isOpened: false,
    }),
  },
  defaultState
);
