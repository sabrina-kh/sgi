import { 
    ADD_FACTURE_FAILED,
    ADD_FACTURE_SUCCESS,
    DELETE_FACTURE_FAILED, 
    DELETE_FACTURE_SUCCESS,
    GET_FACTURE_FAILED, 
    GET_FACTURE_LIST_FAILED, 
    GET_FACTURE_LIST_SUCCESS,
    GET_FACTURE_SUCCESS,
    STORE_FACTURE, 
    UPDATE_FACTURE_FAILED,
    UPDATE_FACTURE_SUCCESS } from "../actions/actionTypes";
  
  const initialState = {
    factureList: [],
    factureData: null,
    error: null,
    loading: null,
    stored: null,
    isPassed: false,
  };
  
  export default function (state = initialState, action) {
      const {type,payload}= action
      switch (type) {
          case ADD_FACTURE_SUCCESS:
        return {
          ...state,
          factureList: [...state.factureList, payload],
        };
        case GET_FACTURE_LIST_SUCCESS:
        return {
          ...state,
          factureList: payload,
        };
        case GET_FACTURE_SUCCESS:
        return {
          ...state,
          factureData: payload,
        };
        case DELETE_FACTURE_SUCCESS:
        return {
          ...state,
          factureList: state.factureList.filter((el) => el._id !== payload),
        };
        case UPDATE_FACTURE_SUCCESS:
        return {
          ...state,
          factureList: state.factureList.map((el) =>
            el._id === payload._id ? payload : el
          ),
        };
        case STORE_FACTURE:
          return {
            ...state,
            stored: payload,
          };
          case ADD_FACTURE_FAILED:
          case GET_FACTURE_FAILED:
          case GET_FACTURE_LIST_FAILED:
          case DELETE_FACTURE_FAILED:
          case UPDATE_FACTURE_FAILED:
            return {
              ...state,
              error: payload,
              };
          }
        }