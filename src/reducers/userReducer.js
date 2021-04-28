import {
	LOAD_USER_FAILURE,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
} from '../constants/userConstants';

const initialState = {
	loading: false,
	userInfo: null,
	error: null,
};

const userReducer = (state = initialState, action) => {
	console.log('userReducer', action);
	switch (action.type) {
		case LOAD_USER_REQUEST:
			return {
				...state,
				loading: true,
				userInfo: null,
			};
		case LOAD_USER_SUCCESS: {
			return {
				...state,
				userInfo: action.payload,
				loading: false,
			};
		}
		case LOAD_USER_FAILURE: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
