import { call, takeEvery, put } from "redux-saga/effects";
import { isApiCallAction } from "../utils/isApiCallAction";
import { apiCallMapping } from "./apiCallMapping";
import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";
import { createActionWithPostfix } from "../utils/createActionWithPostfix";
import { ROUTE_NAMES } from "../routes/routeNames";
import { navigate } from "../services/NavigationService";

function* watchRequestWorker(action) {
  try {
    const foundApiCall = apiCallMapping(action);

    const response = yield call(foundApiCall, action.payload);

    yield put(
      createActionWithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data)
    );
  } catch (error) {
    yield put(
      createActionWithPostfix(action, REQUEST_POSTFIXES.FAIL, error.message)
    );
  }
}

function handleNavigateOnLogIn() {
  navigate(ROUTE_NAMES.POKEMONS);
}

export function* watchRequest() {
  yield takeEvery(isApiCallAction, watchRequestWorker);
  yield takeEvery("SIGN_IN_SUCCESS", handleNavigateOnLogIn);
}
