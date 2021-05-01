import {
	ADD_FRIEND_FAIL,
	ADD_FRIEND_SUCCESS,
	ADD_FRIEND_REQUEST,
} from '../constants/friendConstanst';

const initialState = {
	loading: true,
	success: false,
	error: null,
};
const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FRIEND_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case ADD_FRIEND_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
			};
		}
		case ADD_FRIEND_FAIL: {
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

export default friendReducer;
