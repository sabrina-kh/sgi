import axios from "axios";
import { toast } from "react-toastify";
import { ADD_USER_FAILED, ADD_USER_SUCCESS } from "./actionTypes";

export const addUser =
  ({ firstName, lastName, email, company, password, userType }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      company,
      password,
      userType,
    });

    try {
        const res = await axios.post("/user/add",body,config)
        dispatch({
            type:ADD_USER_SUCCESS,
            payload:res.data
        })
        toast.success("Utilisateur ajouté avec succées")
    } catch (error) {
        dispatch({
            type:ADD_USER_FAILED,
            payload:error
        })
        toast.error("Une erreur a été survenue")
        
    }
  };
