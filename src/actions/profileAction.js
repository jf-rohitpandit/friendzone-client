import axios from 'axios';
import {
	UPDATE_PROFILE_FAIL,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
	GET_PROFILE_FAIL,
	GET_PROFILE_REQUEST,
	GET_PROFILE_SUCCESS,
} from '../constants/profileConstants';

export const updateProfile = (userInfo) => async (dispatch) => {
	try {
		dispatch({
			type: UPDATE_PROFILE_REQUEST,
		});

		const formdata = new FormData();
		formdata.append('name', userInfo.name);
		formdata.append('gender', userInfo.gender);
		formdata.append('avtar', userInfo.avtar);
		formdata.append('country', userInfo.country);
		formdata.append('dob', userInfo.dob);
		formdata.append('aboutMe', userInfo.aboutMe);

		await axios.put('http://localhost:5000/profile', formdata);

		dispatch({
			type: UPDATE_PROFILE_SUCCESS,
		});
	} catch (error) {
		dispatch({ type: UPDATE_PROFILE_FAIL, error: error });
	}
};

export const getProfile = () => async (dispatch) => {
	try {
		dispatch({ type: GET_PROFILE_REQUEST });

		const user = await axios.get('http://localhost:5000/profile');

		dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data.user });
	} catch (error) {
		dispatch({ type: GET_PROFILE_FAIL, error: error });
	}
};
