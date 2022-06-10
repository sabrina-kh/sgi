import axios from "axios";
import {
  ADD_ACQUITCAUTION_FAILED,
  ADD_ACQUITCAUTION_SUCCESS,
  DELETE_ACQUITCAUTION_FAILED,
  DELETE_ACQUITCAUTION_SUCCESS,
  GET_ACQUITCAUTION_FAILED,
  GET_ACQUITCAUTION_LIST_FAILED,
  GET_ACQUITCAUTION_LIST_SUCCESS,
  GET_ACQUITCAUTION_SUCCESS,
  UPDATE_ACQUITCAUTION_FAILED,
  UPDATE_ACQUITCAUTION_SUCCESS,
} from "./actionTypes";

export const addAcquitCaution = () => async (dispatch) => {
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
    const res = await axios.post("/acquitcautions", body, config);
    dispatch({
      type: ADD_ACQUITCAUTION_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ACQUITCAUTION_FAILED,
      payload: error,
    });
  }
};

export const getAcquitCautionList = () => async (dispatch) => {
  try {
    const res = await axios.get("/acquitcautions");
    dispatch({
      type: GET_ACQUITCAUTION_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ACQUITCAUTION_LIST_FAILED,
      payload: error,
    });
  }
};

export const getAcquitCaution = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/acquitcautions/${id}`);
    dispatch({
      type: GET_ACQUITCAUTION_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_ACQUITCAUTION_FAILED,
      payload: error,
    });
  }
};
export const deleteAcquitCaution = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/acquitcautions/${id}`);
    dispatch({
      type: DELETE_ACQUITCAUTION_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ACQUITCAUTION_FAILED,
      payload: error,
    });
  }
};
export const updateAcquitCaution = (id, acquitcaution) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/acquitcautions/${id}`, acquitcaution, config);
    dispatch({
      type: UPDATE_ACQUITCAUTION_SUCCESS,
      payload: acquitcaution,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACQUITCAUTION_FAILED,
      payload: error,
    });
  }
};
