import {
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    SET_UPDATE_FALSE,
    LOGOUT_USER,
} from '../constants/profileConstants';

const initialState = {
    updated: false,
    success: false,
    error: null,
    loading: false,
    user: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                updated: false,
            };
        }
        case UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                updated: true,
                user: action.payload,
            };
        }
        case SET_UPDATE_FALSE: {
            return {
                ...state,
                updated: false,
            };
        }
        case UPDATE_PROFILE_FAIL: {
            return {
                ...state,
                loading: false,
                updated: false,
                error: action.error,
            };
        }

        case GET_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                user: action.payload,
            };
        }
        case GET_PROFILE_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        case LOGOUT_USER: {
            return {
                ...state,
                updated: false,
                success: false,
                error: null,
                loading: false,
                user: null,
            };
        }

        default: {
            return state;
        }
    }
};

export default profileReducer;
