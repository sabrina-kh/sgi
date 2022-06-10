import axios from "axios";
import {
  ADD_MODELIVRAISON_FAILED,
  ADD_MODELIVRAISON_SUCCESS,
  DELETE_MODELIVRAISON_FAILED,
  DELETE_MODELIVRAISON_SUCCESS,
  GET_MODELIVRAISON_FAILED,
  GET_MODELIVRAISON_LIST_FAILED,
  GET_MODELIVRAISON_LIST_SUCCESS,
  GET_MODELIVRAISON_SUCCESS,
  UPDATE_MODELIVRAISON_FAILED,
  UPDATE_MODELIVRAISON_SUCCESS,
} from "./actionTypes";

export const addModeLivraison = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    codemodelivraison,
  });
  try {
    const res = await axios.post("/modelivraison", body, config);
    dispatch({
      type: ADD_MODELIVRAISON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_MODELIVRAISON_FAILED,
      payload: error,
    });
  }
};

export const getModeLivraisonList = () => async (dispatch) => {
  try {
    const res = await axios.get("/modelivraison");
    dispatch({
      type: GET_MODELIVRAISON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MODELIVRAISON_LIST_FAILED,
      payload: error,
    });
  }
};

export const getModeLivraison = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/modelivraison/${id}`);
    dispatch({
      type: GET_MODELIVRAISON_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_MODELIVRAISON_FAILED,
      payload: error,
    });
  }
};
export const deleteModeLivraison = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/modelivraison/${id}`);
    dispatch({
      type: DELETE_MODELIVRAISON_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MODELIVRAISON_FAILED,
      payload: error,
    });
  }
};
export const updateModeLivraison = (id, modelivraison) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/modelivraison/${id}`,modelivraison, config);
    dispatch({
      type: UPDATE_MODELIVRAISON_SUCCESS,
      payload: modelivraison,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MODELIVRAISON_FAILED,
      payload: error,
    });
  }
};
