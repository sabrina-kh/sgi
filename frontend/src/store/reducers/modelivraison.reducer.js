import { 
    ADD_MODELIVRAISON_FAILED,
    ADD_MODELIVRAISON_SUCCESS, 
    DELETE_MODELIVRAISON_FAILED, 
    DELETE_MODELIVRAISON_SUCCESS,
    GET_MODELIVRAISON_FAILED,
    GET_MODELIVRAISON_LIST_FAILED,
    GET_MODELIVRAISON_LIST_SUCCESS,
    GET_MODELIVRAISON_SUCCESS,
    STORE_MODELIVRAISON,
    UPDATE_MODELIVRAISON_FAILED,
    UPDATE_MODELIVRAISON_SUCCESS
       } from "../actions/actionTypes";
  
  const initialState = {
    modeLIVRAISONList: [],
    modeLIVRAISONData: null,
    error: null,
    loading: null,
    stored: null,
    isPassed: false,
  };
  
  export default function (state = initialState, action) {
      const {type,payload}= action
      switch (type) {
          case ADD_MODELIVRAISON_SUCCESS:
        return {
          ...state,
          modelivraisonList: [...state.modelivraisonList, payload],
        };
        case GET_MODELIVRAISON_LIST_SUCCESS:
        return {
          ...state,
         modelivraisonList: payload,
        };
        case GET_MODELIVRAISON_SUCCESS:
        return {
          ...state,
         modelivraisonData: payload,
        };
        case DELETE_MODELIVRAISON_SUCCESS:
        return {
          ...state,
          modelivraisonList: state.modelivraisonList.filter((el) => el._id !== payload),
        };
        case UPDATE_MODELIVRAISON_SUCCESS:
        return {
          ...state,
          modelivraisonList: state.modelivraisonList.map((el) =>
            el._id === payload._id ? payload : el
          ),
        };
        case STORE_MODELIVRAISON:
          return {
            ...state,
            stored: payload,
          };
          case ADD_MODELIVRAISON_FAILED:
          case GET_MODELIVRAISON_FAILED:
          case GET_MODELIVRAISON_LIST_FAILED:
          case DELETE_MODELIVRAISON_FAILED:
          case UPDATE_MODELIVRAISON_FAILED:
            return {
              ...state,
              error: payload,
              };
          }
        }
      