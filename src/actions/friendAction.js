import axios from 'axios';
import {
	ADD_FRIEND_FAIL,
	ADD_FRIEND_REQUEST,
	ADD_FRIEND_SUCCESS,
} from '../constants/friendConstanst';

export const addFriend = (friendId) => async (dispatch) => {
	try {
		dispatch({ type: ADD_FRIEND_REQUEST });

		//axios login
		await axios.put('http://localhost:5000/friend', { friendId });

		dispatch({ type: ADD_FRIEND_SUCCESS });
	} catch (error) {
		dispatch({ type: ADD_FRIEND_FAIL });
	}
};

export const getFriend = () => async (dispatch) => {};
