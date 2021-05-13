import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	SET_ERROR_NULL,
} from '../constants/authConstants';

const initialState = {
	loading: false,
	token: null,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST: {
			return {
				...state,
				loading: true,
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
				error: action.error,
			};

		case USER_LOGOUT:
			return null;

		case SET_ERROR_NULL:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export default authReducer;
