import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  GET_PROFILE_REQUEST,
  LOGOUT_REQUEST,
  RESET_LOGIN,
  RESET_REGISTER,
} from './actionTypes';

export const loginRequest = user => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const registerRequest = user => ({
  type: REGISTER_REQUEST,
  payload: user
});

export const getProfileRequest = payload => ({
  type: GET_PROFILE_REQUEST,
  payload
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const resetLoginState = () => ({
  type: RESET_LOGIN
});

export const resetRegisterState = () => ({
  type: RESET_REGISTER
});
