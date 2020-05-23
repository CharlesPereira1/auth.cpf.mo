export function signInRequest(payload) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload,
  };
}

export function signInSuccess(accessToken) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { accessToken },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
