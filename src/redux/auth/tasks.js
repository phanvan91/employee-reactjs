import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,

  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,

  LOGOUT_REQUEST,
} from './actionTypes';

// import { removeAxiosToken, setStorageToken } from 'api/requester';

function* login({ payload }) {
  try {
    // xu li login
    // const { data: user, token } = yield call(ApiAuth.login, payload);
    yield put({
      type: LOGIN_SUCCESS,
      // payload: { token, user }
    });

  } catch (error) {

    // xu li eror

    yield put({
      type: LOGIN_FAILED,
      payload: error?.response?.data || []
    });
  }
}

// function* logout({ payload }) {
//   try {
//     yield call(ApiAuth.logout, payload);
//     removeAxiosToken()
//   } catch (error) {
//     removeAxiosToken()
//   }
// }
//
// function* register({ payload: user }) {
//   try {
//     const res = yield call(ApiAuth.register, user);
//     yield put({ type: REGISTER_SUCCESS, payload: res });
//   } catch (error) {
//     yield put({ type: REGISTER_FAILED, payload: error.response.data });
//   }
// }
//
// function* getProfile() {
//   try {
//     const {data: user} = yield call(ApiAuth.profile);
//     yield put({ type: GET_PROFILE_SUCCESS, payload: user });
//   } catch (error) {
//     yield put({ type: LOGOUT_REQUEST, payload: null });
//   }
// }

export default function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  // yield takeLatest(LOGOUT_REQUEST, logout);
  // yield takeLatest(REGISTER_REQUEST, register);
  // yield takeLatest(GET_PROFILE_REQUEST, getProfile);
}
