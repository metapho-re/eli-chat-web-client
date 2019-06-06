import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import socketMiddleware from './socketMiddleware';
import {
    authenticate,
    authenticateStatus,
} from './reducers/authenticate';
import {
    chats,
    chatsStatus,
} from './reducers/chats';
import logOutStatus from './reducers/logOutStatus';
import {
    messages,
    messagesStatus,
} from './reducers/messages';
import messageValue from './reducers/messageValue';
import passwordValue from './reducers/passwordValue';
import persistErrorMessage from './reducers/persistErrorMessage';
import socket from './reducers/socket';
import usernameValue from './reducers/usernameValue';
import {
    users,
    usersStatus,
} from './reducers/users';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            authenticate,
            authenticateStatus,
            chats,
            chatsStatus,
            logOutStatus,
            messages,
            messagesStatus,
            messageValue,
            passwordValue,
            persistErrorMessage,
            socket,
            usernameValue,
            users,
            usersStatus,
        }),
        applyMiddleware(
            thunk,
            socketMiddleware,
        ),
    );
    return store;
};

export default configureStore;
