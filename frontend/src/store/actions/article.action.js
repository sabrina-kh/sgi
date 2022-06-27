import axios from "axios";
import {
  ADD_ARTICLE_FAILED,
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILED,
  DELETE_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILED,
  GET_ARTICLE_LIST_FAILED,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILED,
  UPDATE_ARTICLE_SUCCESS,
} from "./actionTypes";

export const addArticle =
  ({
    code,
    désignation,
    degreEnfencement,
    prix,
    température,
    tav,
    densité,
    coefficient,
    quantité,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      code,
      désignation,
      degreEnfencement,
      prix,
      température,
      tav,
      densité,
      coefficient,
      quantité,
    });

    try {
      const res = await axios.post("/articles", body, config);
      dispatch({
        type: ADD_ARTICLE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ARTICLE_FAILED,
        payload: error,
      });
    }
  };

export const getArticleList = () => async (dispatch) => {
  try {
    const res = await axios.get("/articles");
    dispatch({
      type: GET_ARTICLE_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLE_LIST_FAILED,
      payload: error,
    });
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/articles/${id}`);
    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLE_FAILED,
      payload: error,
    });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/articles/${id}`);
    dispatch({
      type: DELETE_ARTICLE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ARTICLE_FAILED,
      payload: error,
    });
  }
};

export const updateArticle = (id, article) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/articles/${id}`, article, config);
    dispatch({
      type: UPDATE_ARTICLE_SUCCESS,
      payload: article,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ARTICLE_FAILED,
      payload: error,
    });
  }
};
