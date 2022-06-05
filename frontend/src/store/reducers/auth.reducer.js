import {
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: null,
  error: null,
  userData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        userData: null,
      };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case GET_USER_DATA_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
