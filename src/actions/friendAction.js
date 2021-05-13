import axios from 'axios';
import {
	ADD_FRIEND_FAIL,
	ADD_FRIEND_REQUEST,
	ADD_FRIEND_SUCCESS,
	GET_FRIEND_FAIL,
	GET_FRIEND_REQUEST,
	GET_FRIEND_SUCCESS,
	GET_SINGLE_FRIEND_FAIL,
	GET_SINGLE_FRIEND_REQUEST,
	GET_SINGLE_FRIEND_SUCCESS,
} from '../constants/friendConstanst';

export const addFriend = (friendId) => async (dispatch) => {
	try {
		dispatch({ type: ADD_FRIEND_REQUEST });

		//axios logic
		await axios.put('https://upbeat-jepsen-ece2e7.netlify.app/friend', {
			friendId,
		});

		dispatch({ type: ADD_FRIEND_SUCCESS });
	} catch (error) {
		dispatch({ type: ADD_FRIEND_FAIL });
	}
};

export const getFriend = () => async (dispatch) => {
	try {
		dispatch({ type: GET_FRIEND_REQUEST });

		const list = await axios.get(
			'https://upbeat-jepsen-ece2e7.netlify.app/friend'
		);
		console.log(list.data);

		dispatch({ type: GET_FRIEND_SUCCESS, payload: list.data });
	} catch (error) {
		dispatch({ type: GET_FRIEND_FAIL, error: error });
	}
};

export const getSingleFriend = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_SINGLE_FRIEND_REQUEST });

		//axios logic
		const result = await axios.get(
			`https://upbeat-jepsen-ece2e7.netlify.app/friend/${id}`
		);

		dispatch({ type: GET_SINGLE_FRIEND_SUCCESS, payload: result.data.user });
	} catch (error) {
		dispatch({ type: GET_SINGLE_FRIEND_FAIL, error: error });
	}
};
