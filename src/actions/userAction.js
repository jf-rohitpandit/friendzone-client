import axios from 'axios';
import {
	LOAD_USER_FAILURE,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
} from '../constants/userConstants';

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const result = await axios.get(
			'https://upbeat-jepsen-ece2e7.netlify.app/home'
		);

		// const userInfo = {
		// 	image,
		// 	name,
		// 	country,
		// 	age,
		// 	aboutMe,
		// 	gender,
		// };

		dispatch({ type: LOAD_USER_SUCCESS, payload: result.data.userInfo });
	} catch (error) {
		dispatch({ type: LOAD_USER_FAILURE, error: error });
	}
};
