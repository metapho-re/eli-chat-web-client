import * as actionTypes from '../actionTypes';

function importChats(state, action) {
    const chats = [];
    action.payload.chats.forEach(chatId => chats.push([chatId, false]));
    return [...state, ...chats];
}

function updateCurrentChat(state, action) {
    return state.map((item) => {
        if (item[0] === action.payload) return [item[0], true];
        return [item[0], false];
    });
}

export const chats = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ACHIEVE_LOGIN:
        return importChats(state, action);
    case actionTypes.ACHIEVE_CREATE_CHAT:
        return [...state, [action.payload[0], false]];
    case actionTypes.STORE_RECEIVED_MESSAGE: {
        const index = state.findIndex(item => item[0] === action.payload.chatId);
        if (index === -1) return [...state, [action.payload.chatId, false]];
        return state;
    }
    case actionTypes.SELECT_CHAT:
        return updateCurrentChat(state, action);
    case actionTypes.ACHIEVE_LOGOUT:
        return [];
    default:
        return state;
    }
};

export const chatsStatus = (state = {
    errorMessage: '',
    isLoading: false,
}, action) => {
    switch (action.type) {
    case actionTypes.REQUEST_CREATE_CHAT:
        return {
            errorMessage: '',
            isLoading: true,
        };
    case actionTypes.REJECT_CREATE_CHAT:
        return {
            errorMessage: action.payload,
            isLoading: false,
        };
    case actionTypes.ACHIEVE_CREATE_CHAT:
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
