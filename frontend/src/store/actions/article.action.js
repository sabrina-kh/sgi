import axios from "axios";
import { ADD_ARTICLE_FAILED, ADD_ARTICLE_SUCCESS } from "./actionTypes";

export const addArticle = () => async (dispatch) => {
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
