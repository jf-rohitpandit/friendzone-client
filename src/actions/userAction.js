import {
	LOAD_USER_FAILURE,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
} from '../constants/userConstants';
import faker from 'faker';

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const image = faker.image.people();
		const name = faker.name.firstName() + faker.name.lastName();
		const state = faker.address.state();
		const country = faker.address.country();
		const age = Math.floor(Math.random() * 20 + 18);
		const aboutMe = faker.lorem.lines();
		const gender = faker.name.gender();

		const userInfo = {
			image,
			name,
			state,
			country,
			age,
			aboutMe,
			gender,
		};

		dispatch({ type: LOAD_USER_SUCCESS, payload: userInfo });
	} catch (error) {
		dispatch({ type: LOAD_USER_FAILURE, error: error });
	}
};
