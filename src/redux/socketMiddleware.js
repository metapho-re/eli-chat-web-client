import io from 'socket.io-client';
import * as actionTypes from './actionTypes';
import { socketPort } from '../config';

const socket = io(socketPort);

const socketMiddleware = (store) => {
    socket.on('connect', () => {
        store.dispatch({
            type: 'STORE_SOCKET_ID',
            payload: socket.id,
        });
    });
    socket.on('newUser', (user) => {
        store.dispatch({
            type: 'ADD_USER_TO_LIST',
            payload: user,
        });
    });
    socket.on('activeUsers', (userList) => {
        store.dispatch({
            type: 'UPDATE_USERS_AVAILABILITY',
            payload: userList,
        });
    });
    socket.on('message', (msg) => {
        store.dispatch({
            type: 'STORE_RECEIVED_MESSAGE',
            payload: JSON.parse(msg),
        });
    });
    socket.on('persistError', (error) => {
        store.dispatch({
            type: 'GET_PERSIST_ERROR',
            payload: error,
        });
    });
    socket.on('socketError', (error) => {
        store.dispatch({
            type: 'GET_SOCKET_ERROR',
            payload: error,
        });
    });
    return next => (action) => {
        if (action.type === actionTypes.ACHIEVE_SIGNUP) {
            socket.emit('signup', [action.payload.username, action.payload.socketId]);
        }
        if (action.type === actionTypes.ACHIEVE_LOGIN) {
            socket.emit('login', [action.payload.username, action.payload.socketId, ...action.payload.chats]);
        }
        if (action.type === actionTypes.ACHIEVE_CREATE_CHAT) {
            socket.emit('createChat', action.payload);
        }
        if (action.type === actionTypes.STORE_SENT_MESSAGE) {
            socket.emit('message', JSON.stringify(action.payload));
        }
        if (action.type === actionTypes.ACHIEVE_LOGOUT) {
            socket.emit('logout', [action.payload.username, ...action.payload.chats]);
        }
        next(action);
    };
};

export default socketMiddleware;
