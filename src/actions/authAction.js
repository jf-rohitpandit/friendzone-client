import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../constants/authConstants';

export const registerUser = (email, password) => async (dispatch) => {
	try {
		console.log('hi in the registerUser action creater');
		dispatch({ type: USER_REGISTER_REQUEST });
		console.log('user register request');
		console.log(USER_REGISTER_REQUEST);

		//change the URL to the actual url of the project
		fetch('http://localhost:5000/auth/signup', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => dispatch({ type: USER_REGISTER_SUCCESS, payload: data }));
	} catch (error) {
		console.log('error in register ');
		//correct the error object
		dispatch({ type: USER_REGISTER_FAIL, error: error });
	}
};

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		console.log('login');

		//change the URL to the actual url of the project
		fetch('http://localhost:5000/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
			})
			.catch((error) => console.log(error));
	} catch (error) {
		console.log('error in register ');
		//correct the error object
		dispatchEvent({ type: USER_LOGIN_FAIL, error: error });
	}
};

export const logoutUser = () => async (dispatch) => {
	dispatch({ type: USER_LOGOUT });
};
