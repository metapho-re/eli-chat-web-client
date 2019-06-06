import {
    achieveCreateChat,
    achieveFetchMessages,
    achieveFetchUsers,
    achieveLogIn,
    achieveLogOut,
    achieveSignUp,
    rejectAuthenticate,
    rejectCreateChat,
    rejectFetchMessages,
    rejectFetchUsers,
    rejectLogOut,
    requestCreateChat,
    requestFetchMessages,
    requestFetchUsers,
    requestLogIn,
    requestLogOut,
    requestSignUp,
} from './actionCreators';
import extractUsers from '../helpers/extractUsers';
import removeSelf from '../helpers/removeSelf';
import extractUsernames from '../helpers/extractUsernames';
import extractSocketIds from '../helpers/extractSocketIds';
import { baseUrl } from '../config';

export const createChat = (token, chatId, users) => (dispatch) => {
    dispatch(requestCreateChat());
    return fetch(`${baseUrl}messages/newchat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            chatId,
            usernames: extractUsernames(users),
        }),
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(() => {
        users.pop();
    }).then(() => dispatch(achieveCreateChat([chatId, ...extractSocketIds(users)])))
        .catch(error => dispatch(rejectCreateChat(error.message)));
};

export const fetchMessages = (token, chats) => (dispatch) => {
    dispatch(requestFetchMessages());
    return fetch(`${baseUrl}messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        credentials: 'same-origin',
        body: JSON.stringify({ chats }),
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(response => response.json()).then((response) => {
        dispatch(achieveFetchMessages(response));
    })
        .catch(error => dispatch(rejectFetchMessages(error.message)));
};

export const fetchUsers = (token, username) => (dispatch) => {
    dispatch(requestFetchUsers());
    return fetch(`${baseUrl}users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        credentials: 'same-origin',
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(response => response.json()).then((response) => {
        dispatch(achieveFetchUsers(removeSelf(extractUsers(response), username)));
    })
        .catch(error => dispatch(rejectFetchUsers(error.message)));
};

export const logIn = credentials => (dispatch) => {
    dispatch(requestLogIn());
    return fetch(`${baseUrl}users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(response => response.json()).then((response) => {
        dispatch(achieveLogIn(response));
    })
        .catch(error => dispatch(rejectAuthenticate(error.message)));
};

export const logOut = token => (dispatch) => {
    dispatch(requestLogOut());
    return fetch(`${baseUrl}users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        credentials: 'same-origin',
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(response => response.json()).then((response) => {
        dispatch(achieveLogOut(response));
    })
        .catch(error => dispatch(rejectLogOut(error.message)));
};

export const signUp = credentials => (dispatch) => {
    dispatch(requestSignUp());
    return fetch(`${baseUrl}users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((response) => {
        if (response.ok) return response;
        const error = new Error(response.statusText);
        throw error;
    }, (error) => {
        throw error;
    }).then(response => response.json()).then((response) => {
        dispatch(achieveSignUp(response));
    })
        .catch(error => dispatch(rejectAuthenticate(error.message)));
};
