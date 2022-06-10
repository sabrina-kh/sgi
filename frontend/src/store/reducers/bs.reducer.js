import { 
    ADD_BS_FAILED,
    ADD_BS_SUCCESS,
    DELETE_BS_FAILED, 
    DELETE_BS_SUCCESS,
    GET_BS_FAILED, 
    GET_BS_LIST_FAILED, 
    GET_BS_LIST_SUCCESS,
    GET_BS_SUCCESS,
    STORE_BS, 
    UPDATE_BS_FAILED,
    UPDATE_BS_SUCCESS } from "../actions/actionTypes";
  
  const initialState = {
    bsList: [],
    bsData: null,
    error: null,
    loading: null,
    stored: null,
    isPassed: false,
  };
  
  export default function (state = initialState, action) {
      const {type,payload}= action
      switch (type) {
          case ADD_BS_SUCCESS:
        return {
          ...state,
          bsList: [...state.bsList, payload],
        };
        case GET_BS_LIST_SUCCESS:
        return {
          ...state,
          bsList: payload,
        };
        case GET_BS_SUCCESS:
        return {
          ...state,
          bsData: payload,
        };
        case DELETE_BS_SUCCESS:
        return {
          ...state,
          bsList: state.bsList.filter((el) => el._id !== payload),
        };
        case UPDATE_BS_SUCCESS:
        return {
          ...state,
          bsList: state.bsList.map((el) =>
            el._id === payload._id ? payload : el
          ),
        };
        case STORE_BS:
          return {
            ...state,
            stored: payload,
          };
          case ADD_BS_FAILED:
          case GET_BS_FAILED:
          case GET_BS_LIST_FAILED:
          case DELETE_BS_FAILED:
          case UPDATE_BS_FAILED:
            return {
              ...state,
              error: payload,
              };
          }
        }