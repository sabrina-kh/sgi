import { 
    ADD_ACQUITCAUTION_FAILED,
    ADD_ACQUITCAUTION_SUCCESS,
    DELETE_ACQUITCAUTION_FAILED, 
    DELETE_ACQUITCAUTION_SUCCESS,
    GET_ACQUITCAUTION_FAILED, 
    GET_ACQUITCAUTION_LIST_FAILED, 
    GET_ACQUITCAUTION_LIST_SUCCESS,
    GET_ACQUITCAUTION_SUCCESS,
    STORE_ACQUITCAUTION, 
    UPDATE_ACQUITCAUTION_FAILED,
    UPDATE_ACQUITCAUTION_SUCCESS } from "../actions/actionTypes";
  
  const initialState = {
    acquitcautionList: [],
    acquitcautionData: null,
    error: null,
    loading: null,
    stored: null,
    isPassed: false,
  };
  
  export default function (state = initialState, action) {
      const {type,payload}= action
      switch (type) {
          case ADD_ACQUITCAUTION_SUCCESS:
        return {
          ...state,
          acquitcautionList: [...state.acquitcautionList, payload],
        };
        case GET_ACQUITCAUTION_LIST_SUCCESS:
        return {
          ...state,
         acquitcautionList: payload,
        };
        case GET_ACQUITCAUTION_SUCCESS:
        return {
          ...state,
         acquitcautionData: payload,
        };
        case DELETE_ACQUITCAUTION_SUCCESS:
        return {
          ...state,
          acquitcautionList: state.acquitcautionList.filter((el) => el._id !== payload),
        };
        case UPDATE_ACQUITCAUTION_SUCCESS:
        return {
          ...state,
          acquitcautionList: state.acquitcautionList.map((el) =>
            el._id === payload._id ? payload : el
          ),
        };
        case STORE_ACQUITCAUTION:
          return {
            ...state,
            stored: payload,
          };
          case ADD_ACQUITCAUTION_FAILED:
          case GET_ACQUITCAUTION_FAILED:
          case GET_ACQUITCAUTION_LIST_FAILED:
          case DELETE_ACQUITCAUTION_FAILED:
          case UPDATE_ACQUITCAUTION_FAILED:
            return {
              ...state,
              error: payload,
              };
          }
        }