import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/authConstants';
import { loadToken } from '../localStorage';

const savedToken = loadToken();

const initialState = {
	loading: false,
	token: savedToken,
	error: null,
};

export default function (state = initialState, action) {
	console.log('authReducer', action);
	switch (action.type) {
		case USER_REGISTER_REQUEST: {
			return {
				...state,
				loading: true,
				token: null,
				error: null,
			};
		}
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload,
			};
		case USER_REGISTER_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload,
			};
		case USER_LOGIN_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case USER_LOGOUT:
			return {
				loading: false,
				error: null,
				token: null,
			};
		default:
			return state;
	}
}
