import { takeLatest, call, all, put, delay } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";

import { signInSuccess, signInFailure } from "./actions";
import { toast } from "react-toastify";

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
    toast.error("Falha na autenticação, verifique seus dados.");
    yield put(signInFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export function* signOut() {
  yield delay(3000);
  history.push("/");
}

export default all([
  // takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
