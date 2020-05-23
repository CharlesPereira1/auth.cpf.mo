import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "../../service/api";
import history from "../../service/history";

import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  //desestrutura o payload
  const { email, password } = payload;

  //faz a chamada passando os parametros
  const response = yield call(api.post, "login", {
    email,
    password,
  });

  //se der certo a requisiçao faz um request de accessToken
  const { accessToken } = response.data;

  yield put(signInSuccess(accessToken));

  //envia para o dashboard
  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
