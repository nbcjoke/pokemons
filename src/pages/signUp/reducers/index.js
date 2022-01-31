import * as actions from "../actions";
import { handleActions } from "redux-actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

const defaultState = {
  isLoading: false,
  error: null,
  userData: {},
  // isAuth: false,
  accessToken: null,
};

export const signUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      console.log(payload);
      const { accessToken, ...userData } = payload.response;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        // isAuth: true,
        userData,
        accessToken,
      };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);