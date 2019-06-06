import * as actionTypes from '../actionTypes';

export const authenticate = (state = {
    isAuthenticated: false,
    token: '',
    username: '',
}, action) => {
    switch (action.type) {
    case actionTypes.ACHIEVE_LOGIN:
        return {
            isAuthenticated: true,
            token: action.payload.token,
            username: action.payload.username,
        };
    case actionTypes.ACHIEVE_SIGNUP:
        return {
            isAuthenticated: true,
            token: action.payload.token,
            username: action.payload.username,
        };
    case actionTypes.ACHIEVE_LOGOUT:
        return {
            isAuthenticated: false,
            token: '',
            username: '',
        };
    default:
        return state;
    }
};

export const authenticateStatus = (state = {
    errorMessage: '',
    isLoadingLogIn: false,
    isLoadingSignUp: false,
}, action) => {
    switch (action.type) {
    case actionTypes.REQUEST_LOGIN:
        return {
            errorMessage: '',
            isLoadingLogIn: true,
            isLoadingSignUp: false,
        };
    case actionTypes.REQUEST_SIGNUP:
        return {
            errorMessage: '',
            isLoadingLogIn: false,
            isLoadingSignUp: true,
        };
    case actionTypes.REJECT_AUTHENTICATE:
        return {
            errorMessage: action.payload,
            isLoadingLogIn: false,
            isLoadingSignUp: false,
        };
    case actionTypes.ACHIEVE_LOGIN:
        return {
            errorMessage: '',
            isLoadingLogIn: false,
            isLoadingSignUp: false,
        };
    case actionTypes.ACHIEVE_SIGNUP:
        return {
            errorMessage: '',
            isLoadingLogIn: false,
            isLoadingSignUp: false,
        };
    default:
        return state;
    }
};
