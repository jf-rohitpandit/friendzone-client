import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

const initialState = {
	loading: false,
	userInfo: null,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				...state,
				loading: true,
				userInfo: null,
				error: null,
			};
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			};
		case USER_REGISTER_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
}
