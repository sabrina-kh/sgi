import axios from "axios";
import {
  ADD_MODEPAIEMENT_FAILED,
  ADD_MODEPAIEMENT_SUCCESS,
  DELETE_MODEPAIEMENT_FAILED,
  DELETE_MODEPAIEMENT_SUCCESS,
  GET_MODEPAIEMENT_FAILED,
  GET_MODEPAIEMENT_LIST_FAILED,
  GET_MODEPAIEMENT_LIST_SUCCESS,
  GET_MODEPAIEMENT_SUCCESS,
  UPDATE_MODEPAIEMENT_FAILED,
  UPDATE_MODEPAIEMENT_SUCCESS,
} from "./actionTypes";

export const addModePaiement = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    codemodepaiement,
  });
  try {
    const res = await axios.post("/modepaiement", body, config);
    dispatch({
      type: ADD_MODEPAIEMENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_MODEPAIEMENT_FAILED,
      payload: error,
    });
  }
};

export const getModePaiementList = () => async (dispatch) => {
  try {
    const res = await axios.get("/modepaiement");
    dispatch({
      type: GET_MODEPAIEMENT_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MODEPAIEMENT_LIST_FAILED,
      payload: error,
    });
  }
};

export const getModePaiement = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/modepaiement/${id}`);
    dispatch({
      type: GET_MODEPAIEMENT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_MODEPAIEMENT_FAILED,
      payload: error,
    });
  }
};
export const deleteModePaiement = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/modepaiement/${id}`);
    dispatch({
      type: DELETE_MODEPAIEMENT_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MODEPAIEMENT_FAILED,
      payload: error,
    });
  }
};
export const updateModePaiement = (id, modepaiement) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/modepaiement/${id}`, modepaiement, config);
    dispatch({
      type: UPDATE_MODEPAIEMENT_SUCCESS,
      payload: modepaiement,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MODEPAIEMENT_FAILED,
      payload: error,
    });
  }
};
