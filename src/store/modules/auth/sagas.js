import { takeLatest, call, all, put, delay } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "login", {
      email,
      password,
    });

    yield delay(3000);

    const { accessToken } = response.data;

    // api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    yield put(signInSuccess(accessToken));

    history.push("/dashboard");
  } catch (error) {
    console.tron.log("Falha na autenticação, verifique seus dados.");
    yield put(signFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export function signOut() {
  history.push("/");
}

export default all([
  // takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
