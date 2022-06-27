/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_ARTICLE_FAILED,
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILED,
  GET_ARTICLE_LIST_FAILED,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_SUCCESS,
  STORE_ARTICLE,
  UPDATE_ARTICLE_FAILED,
  UPDATE_ARTICLE_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  articleList: [],
  articleData: null,
  error: null,
  loading: null,
  stored: null
}
export default function (state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articleList: [...state.articleList, payload]
      }
    case GET_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        articleList: payload
      }
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        articleData: payload
      }
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articleList: state.articleList.filter(el => el._id !== payload)
      }
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articeList: state.articleList.map(el =>
          el._id === payload._id ? payload : el
        )
      }
    case STORE_ARTICLE:
      return {
        ...state,
        stored: payload
      }
    case ADD_ARTICLE_FAILED:
    case GET_ARTICLE_FAILED:
    case GET_ARTICLE_LIST_FAILED:
    case DELETE_ARTICLE_FAILED:
    case UPDATE_ARTICLE_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
