import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import friendReducer from './friendReducer';

export default combineReducers({
	user: userReducer,
	auth: authReducer,
	profile: profileReducer,
	friend: friendReducer,
});
