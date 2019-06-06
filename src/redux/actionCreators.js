import * as actionTypes from './actionTypes';

export const achieveCreateChat = chatParameters => ({
    type: actionTypes.ACHIEVE_CREATE_CHAT,
    payload: chatParameters,
});

export const achieveFetchMessages = response => ({
    type: actionTypes.ACHIEVE_FETCH_MESSAGES,
    payload: response,
});

export const achieveFetchUsers = response => ({
    type: actionTypes.ACHIEVE_FETCH_USERS,
    payload: response,
});

export const achieveLogIn = response => ({
    type: actionTypes.ACHIEVE_LOGIN,
    payload: response,
});

export const achieveLogOut = username => ({
    type: actionTypes.ACHIEVE_LOGOUT,
    payload: username,
});

export const achieveSignUp = response => ({
    type: actionTypes.ACHIEVE_SIGNUP,
    payload: response,
});

export const clearErrorMessage = () => ({
    type: actionTypes.CLEAR_ERROR_MESSAGE,
});

export const handleMessageChange = value => ({
    type: actionTypes.HANDLE_MESSAGE_CHANGE,
    payload: value,
});

export const handlePasswordChange = value => ({
    type: actionTypes.HANDLE_PASSWORD_CHANGE,
    payload: value,
});

export const handleUsernameChange = value => ({
    type: actionTypes.HANDLE_USERNAME_CHANGE,
    payload: value,
});

export const rejectAuthenticate = errorMessage => ({
    type: actionTypes.REJECT_AUTHENTICATE,
    payload: errorMessage,
});

export const rejectCreateChat = errorMessage => ({
    type: actionTypes.REJECT_CREATE_CHAT,
    payload: errorMessage,
});

export const rejectFetchMessages = errorMessage => ({
    type: actionTypes.REJECT_FETCH_MESSAGES,
    payload: errorMessage,
});

export const rejectFetchUsers = errorMessage => ({
    type: actionTypes.REJECT_FETCH_USERS,
    payload: errorMessage,
});

export const rejectLogOut = errorMessage => ({
    type: actionTypes.REJECT_LOGOUT,
    payload: errorMessage,
});

export const requestCreateChat = () => ({
    type: actionTypes.REQUEST_CREATE_CHAT,
});

export const requestFetchMessages = () => ({
    type: actionTypes.REQUEST_FETCH_MESSAGES,
});

export const requestFetchUsers = () => ({
    type: actionTypes.REQUEST_FETCH_USERS,
});

export const requestLogIn = () => ({
    type: actionTypes.REQUEST_LOGIN,
});

export const requestLogOut = () => ({
    type: actionTypes.REQUEST_LOGOUT,
});

export const requestSignUp = () => ({
    type: actionTypes.REQUEST_SIGNUP,
});

export const selectChat = chatId => ({
    type: actionTypes.SELECT_CHAT,
    payload: chatId,
});

export const storeSentMessage = msg => ({
    type: actionTypes.STORE_SENT_MESSAGE,
    payload: msg,
});

export const toggleUserForChat = username => ({
    type: actionTypes.TOGGLE_USER_FOR_CHAT,
    payload: username,
});
