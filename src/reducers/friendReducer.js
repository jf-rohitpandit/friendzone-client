import {
	ADD_FRIEND_FAIL,
	ADD_FRIEND_SUCCESS,
	ADD_FRIEND_REQUEST,
	GET_FRIEND_FAIL,
	GET_FRIEND_SUCCESS,
	GET_FRIEND_REQUEST,
	GET_SINGLE_FRIEND_FAIL,
	GET_SINGLE_FRIEND_REQUEST,
	GET_SINGLE_FRIEND_SUCCESS,
} from '../constants/friendConstanst';

const initialState = {
	loading: false,
	success: false,
	error: null,
	friendList: [],
	singleFriend: null,
};
const friendReducer = (state = initialState, action) => {
	console.log('hi');
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
		case GET_FRIEND_REQUEST: {
			return {
				...state,
				loading: true,
				success: false,
			};
		}
		case GET_FRIEND_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				friendList: action.payload,
			};
		}
		case GET_FRIEND_FAIL: {
			return {
				...state,
				loading: false,
				success: false,
				error: action.error,
			};
		}
		case GET_SINGLE_FRIEND_REQUEST: {
			return {
				...state,
				loading: true,
				success: false,
				error: null,
				singleFriend: null,
			};
		}

		case GET_SINGLE_FRIEND_SUCCESS: {
			return {
				...state,
				loading: false,
				success: true,
				singleFriend: action.payload,
			};
		}

		case GET_SINGLE_FRIEND_FAIL: {
			return {
				...state,
				loading: false,
				success: false,
				error: action.payload,
			};
		}

		default:
			return state;
	}
};

export default friendReducer;
