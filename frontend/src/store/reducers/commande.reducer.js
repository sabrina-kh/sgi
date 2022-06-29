/* eslint-disable import/no-anonymous-default-export */
import { 
  ADD_COMMANDE_FAILED,
  ADD_COMMANDE_SUCCESS, 
  DELETE_COMMANDE_FAILED, 
  DELETE_COMMANDE_SUCCESS,
  GET_COMMANDE_FAILED,
  GET_COMMANDE_LIST_FAILED,
  GET_COMMANDE_LIST_SUCCESS,
  GET_COMMANDE_SUCCESS,
  STORE_COMMANDE,
  UPDATE_COMMANDE_FAILED,
  UPDATE_COMMANDE_SUCCESS
     } from "../actions/actionTypes";

const initialState = {
  commandeList: [],
  commandeData: null,
  error: null,
  loading: null,
  stored: null,
  isPassed: false,
};

export default function (state = initialState, action) {
    const {type,payload}= action
    switch (type) {
        case ADD_COMMANDE_SUCCESS:
      return {
        ...state,
        commandeList: [...state.commandeList, payload],
      };
      case GET_COMMANDE_LIST_SUCCESS:
      return {
        ...state,
        commandeList: payload,
      };
      case GET_COMMANDE_SUCCESS:
      return {
        ...state,
        commandeData: payload,
      };
      case DELETE_COMMANDE_SUCCESS:
      return {
        ...state,
        commandeList: state.commandeList.filter((el) => el._id !== payload),
      };
      case UPDATE_COMMANDE_SUCCESS:
      return {
        ...state,
        commandeList: state.commandeList.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };
      case STORE_COMMANDE:
        return {
          ...state,
          stored: payload,
        };
        case ADD_COMMANDE_FAILED:
        case GET_COMMANDE_FAILED:
        case GET_COMMANDE_LIST_FAILED:
        case DELETE_COMMANDE_FAILED:
        case UPDATE_COMMANDE_FAILED:
          return {
            ...state,
            error: payload,
            };
          default:
            return state
        }
      }
    