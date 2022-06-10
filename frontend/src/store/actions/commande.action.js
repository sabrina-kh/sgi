import axios from "axios";
import {
  ADD_COMMANDE_FAILED,
  ADD_COMMANDE_SUCCESS,
  DELETE_COMMANDE_FAILED,
  DELETE_COMMANDE_SUCCESS,
  GET_COMMANDE_FAILED,
  GET_COMMANDE_LIST_FAILED,
  GET_COMMANDE_LIST_SUCCESS,
  GET_COMMANDE_SUCCESS,
  UPDATE_COMMANDE_FAILED,
  UPDATE_COMMANDE_SUCCESS,
} from "./actionTypes";

export const addCommande = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    lieuDeLivraison,
    numCom,
    prixHT,
    prixTOT,
    nbFut,
    volume,
    remise,
  });
  try {
    const res = await axios.post("/commandes", body, config);
    dispatch({
      type: ADD_COMMANDE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMANDE_FAILED,
      payload: error,
    });
  }
};

export const getCommandeList = () => async (dispatch) => {
  try {
    const res = await axios.get("/commandes");
    dispatch({
      type: GET_COMMANDE_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMANDE_LIST_FAILED,
      payload: error,
    });
  }
};

export const getCommande = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/commandes/${id}`);
    dispatch({
      type: GET_COMMANDE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMANDE_FAILED,
      payload: error,
    });
  }
};
export const deleteCommande = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/commandes/${id}`);
    dispatch({
      type: DELETE_COMMANDE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMANDE_FAILED,
      payload: error,
    });
  }
};
export const updateCommande = (id, commande) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/commandes/${id}`, commande, config);
    dispatch({
      type: UPDATE_COMMANDE_SUCCESS,
      payload: commande,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COMMANDE_FAILED,
      payload: error,
    });
  }
};
