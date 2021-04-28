import axios from 'axios';
import {
	UPDATE_PROFILE_FAIL,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
} from '../constants/profileConstants';

export const updateProfile = (userInfo) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_PROFILE_REQUEST });

		//axios logic

		dispatch({ type: UPDATE_PROFILE_SUCCESS });
	} catch (error) {
		dispatch({ type: UPDATE_PROFILE_FAIL, error: error });
	}
};
