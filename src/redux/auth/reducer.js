import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,

  LOGOUT_REQUEST,

} from './actionTypes';

const initState = {
  isLoading: null,
  getListFailed: undefined,
  error: undefined,

  profileFailed: null,

  isLoadingLogin: null,
  isLogin: false,
  user: null,
  loginFailed: null,

  isLoadingRegister: null,
  registerSuccess: null,
  registerFailed: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoadingLogin: true,
        isLogin: false,
        loginFailed: null,
      }
    case LOGIN_SUCCESS:
      // login success
      let newState = {
        ...state,
        isLogin: payload.isLogin,
        user: payload.user,
        isLoadingLogin: false,
        loginFailed: null,
      }
      localStorage.setItem('auth',JSON.stringify(newState));
      return newState;
    case LOGIN_FAILED:
      return {
        ...state,
        loginFailed: payload,
        isLoadingLogin: false,
      }
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        profileFailed: null,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isLogin: payload.isLogin,
        isLoading: false,
        profileFailed: null,
      }
    case GET_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        profileFailed: payload,
      }
    case LOGOUT_REQUEST:
      localStorage.removeItem('auth');
      return {
        ...initState,
        isLoading: false,
        isLogin: false
      }

    default:
      return state;
  }
};
