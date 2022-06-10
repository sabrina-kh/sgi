import axios from "axios";
import {
  ADD_FACTURE_FAILED,
  ADD_FACTURE_SUCCESS,
  DELETE_FACTURE_FAILED,
  DELETE_FACTURE_SUCCESS,
  GET_FACTURE_FAILED,
  GET_FACTURE_LIST_FAILED,
  GET_FACTURE_LIST_SUCCESS,
  GET_FACTURE_SUCCESS,
  UPDATE_FACTURE_FAILED,
  UPDATE_FACTURE_SUCCESS,
} from "./actionTypes";

export const addFacture = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    numfact,
  });
  try {
    const res = await axios.post("/factures", body, config);
    dispatch({
      type: ADD_FACTURE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_FACTURE_FAILED,
      payload: error,
    });
  }
};

export const getFactureList = () => async (dispatch) => {
  try {
    const res = await axios.get("/factures");
    dispatch({
      type: GET_FACTURE_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FACTURE_LIST_FAILED,
      payload: error,
    });
  }
};

export const getFacture = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/factures/${id}`);
    dispatch({
      type: GET_FACTURE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_FACTURE_FAILED,
      payload: error,
    });
  }
};
export const deleteFacture = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/factures/${id}`);
    dispatch({
      type: DELETE_FACTURE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_FACTURE_FAILED,
      payload: error,
    });
  }
};
export const updateFacture = (id, facture) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/factures/${id}`, facture, config);
    dispatch({
      type: UPDATE_FACTURE_SUCCESS,
      payload: facture,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FACTURE_FAILED,
      payload: error,
    });
  }
};
