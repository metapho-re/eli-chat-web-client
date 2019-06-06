import * as actionTypes from '../actionTypes';
import extractChat from '../../helpers/extractChat';
import findChatIndex from '../../helpers/findChatIndex';

function populateRows(state, action) {
    const chats = [];
    action.payload.forEach((chat) => {
        if (chat.length !== 0) chats.push(extractChat(chat));
    });
    return [...state, ...chats];
}

function updateMessageRow(state, action) {
    return state.map((row) => {
        if (row[0] === action.payload.chatId) {
            const msg = [action.payload.username, action.payload.time, action.payload.message];
            return [row[0], [...row[1], msg]];
        }
        return row;
    });
}

export const messages = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ACHIEVE_FETCH_MESSAGES:
        return populateRows(state, action);
    case actionTypes.STORE_SENT_MESSAGE: {
        const index = findChatIndex(action.payload.chatId, state);
        if (index === -1) {
            const msg = [action.payload.username, action.payload.time, action.payload.message];
            const chat = [action.payload.chatId, [msg]];
            return [...state, chat];
        }
        return updateMessageRow(state, action);
    }
    case actionTypes.STORE_RECEIVED_MESSAGE: {
        const index = findChatIndex(action.payload.chatId, state);
        if (index === -1) {
            const msg = [action.payload.username, action.payload.time, action.payload.message];
            const chat = [action.payload.chatId, [msg]];
            return [...state, chat];
        }
        return updateMessageRow(state, action);
    }
    case actionTypes.ACHIEVE_LOGOUT:
        return [];
    default:
        return state;
    }
};

export const messagesStatus = (state = {
    errorMessage: '',
    isLoading: false,
}, action) => {
    switch (action.type) {
    case actionTypes.REQUEST_FETCH_MESSAGES:
        return {
            errorMessage: '',
            isLoading: true,
        };
    case actionTypes.REJECT_FETCH_MESSAGES:
        return {
            errorMessage: action.payload,
            isLoading: false,
        };
    case actionTypes.ACHIEVE_FETCH_MESSAGES:
        return {
            errorMessage: '',
            isLoading: false,
        };
    case actionTypes.CLEAR_ERROR_MESSAGE:
        return {
            ...state,
            errorMessage: '',
        };
    case actionTypes.ACHIEVE_LOGOUT:
        return {
            errorMessage: '',
            isLoading: false,
        };
    default:
        return state;
    }
};
