import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

export default combineReducers({
	user: userReducer,
	auth: authReducer,
	profile: profileReducer,
});
