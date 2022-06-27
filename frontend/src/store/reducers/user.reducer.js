/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_CLIENT_LIST_SUCCESS,
  GET_CLIENT_LIST_FAILED,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  GET_RESP_VENTE_LIST_SUCCESS,
  GET_RESP_VENTE_LIST_FAILED,
  GET_RESP_VENTE_SUCCESS,
  GET_RESP_VENTE_FAILED,
  GET_RESP_STOCK_LIST_SUCCESS,
  GET_RESP_STOCK_LIST_FAILED,
  GET_RESP_STOCK_SUCCESS,
  GET_RESP_STOCK_FAILED,
  GET_RESP_REGLEMENT_LIST_SUCCESS,
  GET_RESP_REGLEMENT_LIST_FAILED,
  GET_RESP_REGLEMENT_SUCCESS,
  GET_RESP_REGLEMENT_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  STORE_USER,
} from "../actions/actionTypes";

const initialState = {
  userList: [],
  userData: null,
  clientList: [],
  clientData: null,
  respVenteList: [],
  respVenteData: null,
  respReglementList: [],
  respReglementData: null,
  respStockList: [],
  respStockData: null,
  error: null,
  loading: null,
  stored: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      };
    case GET_CLIENT_LIST_SUCCESS:
      return {
        ...state,
        clientList: action.payload,
      };
    case GET_RESP_REGLEMENT_LIST_SUCCESS:
      return {
        ...state,
        respReglementList: action.payload,
      };
    case GET_RESP_VENTE_LIST_SUCCESS:
      return {
        ...state,
        respVenteList: action.payload,
      };
    case GET_RESP_STOCK_LIST_SUCCESS:
      return {
        ...state,
        respStockList: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        clientData: action.payload,
      };
    case GET_RESP_REGLEMENT_SUCCESS:
      return {
        ...state,
        respReglementData: action.payload,
      };
    case GET_RESP_VENTE_SUCCESS:
      return {
        ...state,
        respVenteData: action.payload,
      };
    case GET_RESP_STOCK_SUCCESS:
      return {
        ...state,
        respStockData: action.payload,
      };
    case GET_USER_FAILED:
    case GET_CLIENT_FAILED:
    case GET_RESP_REGLEMENT_FAILED:
    case GET_RESP_VENTE_FAILED:
    case GET_RESP_STOCK_FAILED:
    case GET_USER_LIST_FAILED:
    case GET_CLIENT_LIST_FAILED:
    case GET_RESP_REGLEMENT_LIST_FAILED:
    case GET_RESP_STOCK_LIST_FAILED:
    case GET_RESP_VENTE_LIST_FAILED:
    case GET_RESP_REGLEMENT_FAILED:
    case GET_RESP_STOCK_FAILED:
    case GET_RESP_VENTE_FAILED:
    case ADD_USER_FAILED:
    case DELETE_USER_FAILED:
    case UPDATE_USER_FAILED:
      return {
        userList: [],
        userData: null,
        clientList: [],
        clientData: null,
        respVenteList: [],
        respVenteData: null,
        respReglementList: [],
        respReglementData: null,
        respStockList: [],
        respStockData: null,
        error: action.payload,
        loading: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userData.filter((el) => el._id !== action.payload),
      };
    case STORE_USER:
      return {
        ...state,
        stored: action.payload,
      };
      case UPDATE_USER_SUCCESS:
        return{
          ...state,
          userList: state.userList.map(el => (el._id === action.payload._id ? action.payload : el))
        }
    default:
      return state;
  }
}
