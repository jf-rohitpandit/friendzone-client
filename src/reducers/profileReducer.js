import {
	UPDATE_PROFILE_FAIL,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
} from '../constants/profileConstants';

const initialState = {
	success: null,
	error: null,
	loading: null,
};

const profileReducer = (state = initialState, action) => {
	console.log('profileReducer', state, action);
	switch (action.type) {
		case UPDATE_PROFILE_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case UPDATE_PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				success: action.payload,
			};
		}
		case UPDATE_PROFILE_FAIL: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default: {
			return state;
		}
	}
};

export default profileReducer;
