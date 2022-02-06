import * as actions from "../actions";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  error: null,
  userData: {},
  isRegister: false,
  accessToken: null,
  success: false,
};

export const signUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
      success: null,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userData } = payload.response;

      return {
        ...state,
        isLoading: false,
        isRegister: true,
        userData,
        accessToken,
        success: true,
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
