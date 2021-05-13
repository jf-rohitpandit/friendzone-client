import axios from 'axios';
import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	SET_ERROR_NULL,
} from '../constants/authConstants';
import { saveToken } from '../localStorage';

export const registerUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const result = await axios.post(
			'https://sleepy-basin-66163.herokuapp.com/auth/signup',
			{
				email,
				password,
			}
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: result.data.token,
		});
		saveToken(result.data.token);
	} catch (error) {
		dispatch({ type: USER_REGISTER_FAIL, error: error.response.data.message });
		setTimeout(() => {
			dispatch({ type: SET_ERROR_NULL });
		}, 5000);
	}
};

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const result = await axios.post(
			'https://sleepy-basin-66163.herokuapp.com/auth/login',
			{
				email,
				password,
			}
		);

		dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data.token });
		saveToken(result.data.token);
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			error: error.response.data.message,
		});
		setTimeout(() => {
			dispatch({ type: SET_ERROR_NULL });
		}, 5000);
	}
};

export const logoutUser = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT });
};
