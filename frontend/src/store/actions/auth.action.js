import axios from "axios";
import { GET_USER_DATA_FAILED, GET_USER_DATA_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS } from "./actionTypes";
import { toast } from 'react-toastify'
import setToken from "../../utils/setToken";

export const getUserData = () => async dispatch => {
    if (localStorage.token) {
      setToken(localStorage.token)
    }
  
    try {
      const res = await axios.get('/user/')
  
      dispatch({
        type: GET_USER_DATA_SUCCESS,
        payload: res.data
      })

      dispatch(getUserData())
    } catch (error) {
      dispatch({
        type: GET_USER_DATA_FAILED,
        payload: error
      })
    }
  }
  

export const register =
  ({ firstName, lastName, email, password, company, userType }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = await JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      company,
      userType,
    });

    try {
      const res = await axios.post("/users/register", body, config);
      dispatch ({
          type:REGISTER_SUCCESS,
          payload: res.data
      })
      toast.success("L'admin est ajouté par succès!")
    } catch (error) {
        dispatch({
            type: REGISTER_FAILED,
            payload: error
        })
        toast.error("Une erreur a été survenue!")
    }
  };

  export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = await JSON.stringify({
      email,
      password,
    });

    try {
      const res = await axios.post("/users/login", body, config);
      dispatch ({
          type:LOGIN_SUCCESS,
          payload: res.data
      })
      dispatch(getUserData())
      toast.success("Connecté avec succès!")
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED,
            payload: error
        })
        toast.error("Une erreur a été survenue!")
    }
  };

  export const logout = () => async dispatch => {
      dispatch({
        type: LOGOUT,
      })
  }
