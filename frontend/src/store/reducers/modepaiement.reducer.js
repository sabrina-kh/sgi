import { 
    ADD_MODEPAIEMENT_FAILED,
    ADD_MODEPAIEMENT_SUCCESS, 
    DELETE_MODEPAIEMENT_FAILED, 
    DELETE_MODEPAIEMENT_SUCCESS,
    GET_MODEPAIEMENT_FAILED,
    GET_MODEPAIEMENT_LIST_FAILED,
    GET_MODEPAIEMENT_LIST_SUCCESS,
    GET_MODEPAIEMENT_SUCCESS,
    STORE_MODEPAIEMENT,
    UPDATE_MODEPAIEMENT_FAILED,
    UPDATE_MODEPAIEMENT_SUCCESS
       } from "../actions/actionTypes";
  
  const initialState = {
    modepaiementList: [],
    modepaiementData: null,
    error: null,
    loading: null,
    stored: null,
    isPassed: false,
  };
  
  export default function (state = initialState, action) {
      const {type,payload}= action
      switch (type) {
          case ADD_MODEPAIEMENT_SUCCESS:
        return {
          ...state,
          modepaiementList: [...state.modepaiementList, payload],
        };
        case GET_MODEPAIEMENT_LIST_SUCCESS:
        return {
          ...state,
         modepaiementList: payload,
        };
        case GET_MODEPAIEMENT_SUCCESS:
        return {
          ...state,
         modepaiementData: payload,
        };
        case DELETE_MODEPAIEMENT_SUCCESS:
        return {
          ...state,
          modepaiementList: state.modepaiementList.filter((el) => el._id !== payload),
        };
        case UPDATE_MODEPAIEMENT_SUCCESS:
        return {
          ...state,
          modepaiementList: state.modepaiementList.map((el) =>
            el._id === payload._id ? payload : el
          ),
        };
        case STORE_MODEPAIEMENT:
          return {
            ...state,
            stored: payload,
          };
          case ADD_MODEPAIEMENT_FAILED:
          case GET_MODEPAIEMENT_FAILED:
          case GET_MODEPAIEMENT_LIST_FAILED:
          case DELETE_MODEPAIEMENT_FAILED:
          case UPDATE_MODEPAIEMENT_FAILED:
            return {
              ...state,
              error: payload,
              };
          }
        }
      