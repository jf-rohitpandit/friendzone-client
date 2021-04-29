import axios from 'axios';
import {
	UPDATE_PROFILE_FAIL,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
} from '../constants/profileConstants';

export const updateProfile = (userInfo) => async (dispatch) => {
	console.log('updateProfile');
	try {
		dispatch({
			type: UPDATE_PROFILE_REQUEST,
		});
		console.log('Hi in the  updateProfile');

		//axios logic

		dispatch({
			type: UPDATE_PROFILE_SUCCESS,
			payload: 'Profile updated successfully',
		});
	} catch (error) {
		dispatch({ type: UPDATE_PROFILE_FAIL, error: error });
	}
};
