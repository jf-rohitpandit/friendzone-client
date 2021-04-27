import axios from 'axios';
import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../constants/authConstants';
import { saveToken } from '../localStorage';

export const registerUser = (email, password) => async (dispatch) => {
	try {
		console.log('hi in the registerUser action creater');
		dispatch({ type: USER_REGISTER_REQUEST });
		console.log('user register request');
		console.log(USER_REGISTER_REQUEST);

		const result = await axios.post('http://localhost:5000/auth/signup', {
			email,
			password,
		});

		console.log('authAction', result);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: result.data.token,
		});
		saveToken(result.data.token);
	} catch (error) {
		console.log('error in registerAction ', error.response.data.message);
		dispatch({ type: USER_REGISTER_FAIL, error: error.response.data.message });
	}
};

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		console.log('login');

		const result = await axios.post('http://localhost:5000/auth/login', {
			email,
			password,
		});

		dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data.token });
		saveToken(result.data.token);
	} catch (error) {
		console.log('error in loginAction ', error);
		dispatch({
			type: USER_LOGIN_FAIL,
			error: error.response.data.message,
		});
	}
};

export const logoutUser = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT });
};
