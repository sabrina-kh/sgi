import axios from 'axios';
import { toast } from 'react-toastify';
import {
	ADD_USER_FAILED,
	ADD_USER_SUCCESS,
	CLEAR_USER,
	DELETE_USER_FAILED,
	DELETE_USER_SUCCESS,
	GET_CLIENT_LIST_FAILED,
	GET_CLIENT_LIST_SUCCESS,
	GET_RESP_REGLEMENT_LIST_FAILED,
	GET_RESP_REGLEMENT_LIST_SUCCESS,
	GET_RESP_STOCK_LIST_FAILED,
	GET_RESP_STOCK_LIST_SUCCESS,
	GET_RESP_VENTE_LIST_FAILED,
	GET_RESP_VENTE_LIST_SUCCESS,
	GET_USER_DATA_FAILED,
	GET_USER_DATA_SUCCESS,
	GET_USER_LIST_FAILED,
	GET_USER_LIST_SUCCESS,
	STORE_USER,
	UPDATE_USER_FAILED,
	UPDATE_USER_SUCCESS,
	GET_CLIENT_DATA_SUCCESS,
	GET_CLIENT_DATA_FAILED,
	GET_RESP_REGLEMENT_DATA_FAILED,
	GET_RESP_REGLEMENT_DATA_SUCCESS,
	GET_RESP_VENTE_DATA_SUCCESS,
	GET_RESP_VENTE_DATA_FAILED,
	GET_RESP_STOCK_DATA_SUCCESS,
	GET_RESP_STOCK_DATA_FAILED,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  GET_RESP_VENTE_SUCCESS,
  GET_RESP_VENTE_FAILED,
  GET_RESP_STOCK_SUCCESS,
  GET_RESP_STOCK_FAILED,
  GET_RESP_REGLEMENT_FAILED,
  GET_RESP_REGLEMENT_SUCCESS,
} from './actionTypes';

export const addUser =
	({ firstName, lastName, email, company, password, userType }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
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
			const res = await axios.post('/users/add', body, config);
			dispatch({
				type: ADD_USER_SUCCESS,
				payload: res.data,
			});
			toast.success('Utilisateur ajouté avec succées');
		} catch (error) {
			const errorMessage = error.response.data.errors[0].msg;
			dispatch({
				type: ADD_USER_FAILED,
				payload: error,
			});
			toast.error(errorMessage);
		}
	};

export const getUserList = () => async (dispatch) => {
	try {
		const res = await axios.get('/user/');
		dispatch({
			type: GET_USER_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_USER_LIST_FAILED,
			payload: error,
		});
	}
};

export const getClientList = () => async (dispatch) => {
	try {
		const res = await axios.get('/clients/');
		dispatch({
			type: GET_CLIENT_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_CLIENT_LIST_FAILED,
			payload: error,
		});
	}
};

export const getRespVenteList = () => async (dispatch) => {
	try {
		const res = await axios.get('/respvente/');
		dispatch({
			type: GET_RESP_VENTE_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_VENTE_LIST_FAILED,
			payload: error,
		});
	}
};

export const getRespStockList = () => async (dispatch) => {
	try {
		const res = await axios.get('/respstock/');
		dispatch({
			type: GET_RESP_STOCK_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_STOCK_LIST_FAILED,
			payload: error,
		});
	}
};

export const getRespReglementList = () => async (dispatch) => {
	try {
		const res = await axios.get('/respreglement/');
		dispatch({
			type: GET_RESP_REGLEMENT_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_REGLEMENT_LIST_FAILED,
			payload: error,
		});
	}
};

export const getUserData = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`/users/${userId}`);
		dispatch({
			type: GET_USER_DATA_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_USER_DATA_FAILED,
			payload: error,
		});
	}
};

export const getClientData = (clientId) => async (dispatch) => {
	try {
		const res = await axios.get(`/clients/${clientId}`);
		dispatch({
			type: GET_CLIENT_SUCCESS,
			payload: res.data,
		});
		console.log(clientId)
	} catch (error) {
		dispatch({
			type: GET_CLIENT_FAILED,
			payload: error,
		});
	}
};

export const getrespVenteData = (respVenteId) => async (dispatch) => {
	try {
		const res = await axios.get(`/respvente/${respVenteId}`);
		dispatch({
			type: GET_RESP_VENTE_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_VENTE_FAILED,
			payload: error,
		});
	}
};

export const getrespStockData = (respStockId) => async (dispatch) => {
	try {
		const res = await axios.get(`/respstock/${respStockId}`);
		dispatch({
			type: GET_RESP_STOCK_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_STOCK_FAILED,
			payload: error,
		});
	}
};

export const getrespReglementData = (respReglementId) => async (dispatch) => {
	try {
		const res = await axios.get(`/respreglement/${respReglementId}`);
		dispatch({
			type: GET_RESP_REGLEMENT_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_RESP_REGLEMENT_FAILED,
			payload: error,
		});
	}
};

export const deleteUser = (userId) => async (dispatch) => {
	try {
		const res = await axios.delete(`/users/${userId}`);
		dispatch({
			type: DELETE_USER_SUCCESS,
			payload: userId,
		});
		toast.success('Utilisateur supprimé avec succés');
	} catch (error) {
		dispatch({
			type: DELETE_USER_FAILED,
			payload: error,
		});
		toast.error('Une erreur a été survenue');
	}
};

export const deleteClient = (clientId) => async (dispatch) => {
	try {
		const res = await axios.delete(`/clients/${clientId}`);
		dispatch({
			type: DELETE_USER_SUCCESS,
			payload: clientId,
		})
		toast.success('Utilisateur supprimé avec succés');
	} catch (error) {
		dispatch({
			type: DELETE_USER_FAILED,
			payload: error,
		});
		toast.error('Une erreur a été survenue');
	}
};

export const storeUser = (userData) => (dispatch) => {
	dispatch({
		type: STORE_USER,
		payload: userData,
	});
};

export const updateUser = (userId, userData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const res = await axios.put(`/users/${userId}`, userData, config);

		dispatch({
			type: UPDATE_USER_SUCCESS,
			payload: userData,
		});
		toast.success('Utilisateur modifié avec succés');
	} catch (error) {
		dispatch({
			type: UPDATE_USER_FAILED,
			payload: error,
		});
		toast.error('Modification Erroné');
	}
};

export const clearUser = () => (dispatch) => {
	dispatch({
		type: CLEAR_USER,
	});
};
