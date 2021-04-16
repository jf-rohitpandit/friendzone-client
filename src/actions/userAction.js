import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
} from '../constants/userConstants';

export const registerUser = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		//change the URL to the actual url of the project
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => dispatch({ type: USER_REGISTER_SUCCESS, payload: data }));
	} catch (error) {
		console.log('error in register ');
		//correct the error object
		dispatchEvent({ type: USER_REGISTER_FAIL, error: 'some error occured' });
	}
};
