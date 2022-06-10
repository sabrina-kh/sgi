import axios from "axios";
import {
  ADD_BS_FAILED,
  ADD_BS_SUCCESS,
  DELETE_BS_FAILED,
  DELETE_BS_SUCCESS,
  GET_BS_FAILED,
  GET_BS_LIST_FAILED,
  GET_BS_LIST_SUCCESS,
  GET_BS_SUCCESS,
  UPDATE_BS_FAILED,
  UPDATE_BS_SUCCESS,
} from "./actionTypes";

export const addBs = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    numbs,
  });
  try {
    const res = await axios.post("/bs", body, config);
    dispatch({
      type: ADD_BS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_BS_FAILED,
      payload: error,
    });
  }
};

export const getBsList = () => async (dispatch) => {
  try {
    const res = await axios.get("/bs");
    dispatch({
      type: GET_BS_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BS_LIST_FAILED,
      payload: error,
    });
  }
};

export const getBs = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/bs/${id}`);
    dispatch({
      type: GET_BS_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_BS_FAILED,
      payload: error,
    });
  }
};
export const deleteBs = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/bs/${id}`);
    dispatch({
      type: DELETE_BS_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BS_FAILED,
      payload: error,
    });
  }
};
export const updateBs = (id, bs) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/bs/${id}`, bs, config);
    dispatch({
      type: UPDATE_BS_SUCCESS,
      payload: bs,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BS_FAILED,
      payload: error,
    });
  }
};
