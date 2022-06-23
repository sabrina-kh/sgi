import axios from 'axios';
import {
	GET_USER_DATA_FAILED,
	GET_USER_DATA_SUCCESS,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
} from './actionTypes';
import { toast } from 'react-toastify';
import setToken from '../../utils/setToken';

export const getUserData = () => async (dispatch) => {
	if (localStorage.token) {
		await setToken(localStorage.token);
	}

	try {
		const res = await axios.get('/users');

		dispatch({
			type: GET_USER_DATA_SUCCESS,
			payload: res.data,
		});
		console.log(localStorage);
	} catch (error) {
		console.log(localStorage);
		dispatch({
			type: GET_USER_DATA_FAILED,
			payload: error,
		});
	}
};

export const registerUser =
	({ firstName, lastName, email, password, company, userType }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
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
			const res = await axios.post('/users', body, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			await toast.success("L'admin est ajouté par succès!");
			dispatch(getUserData());
		} catch (error) {
			const errorMessage = error.response.data.errors[0].msg;
			dispatch({
				type: REGISTER_FAILED,
				payload: errorMessage,
			});
			console.log('error', error.response.data.errors[0].msg);
			toast.error(errorMessage);
		}
	};

export const login =
	({ email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = await JSON.stringify({
			email,
			password,
		});

		try {
			const res = await axios.post('/users/login', body, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			//dispatch(getUserData())
			toast.success('Connecté avec succès!');
		} catch (error) {
			dispatch({
				type: LOGIN_FAILED,
				payload: error,
			});
			toast.error('Une erreur a été survenue!');
		}
	};

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
