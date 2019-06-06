import * as actionTypes from '../actionTypes';

function updateUsersAvailability(state, action) {
    return state.map((item) => {
        const index = action.payload.findIndex(user => user[0] === item[0]);
        if (index === -1) return [item[0], '', item[2]];
        return [item[0], action.payload[index][1], item[2]];
    });
}

function toggleUserSelected(state, action) {
    return state.map((item) => {
        if (item[0] === action.payload) return [item[0], item[1], !item[2]];
        return item;
    });
}

function resetUsersSelected(state) {
    return state.map(item => [item[0], item[1], false]);
}

export const users = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ACHIEVE_FETCH_USERS:
        return [...state, ...action.payload];
    case actionTypes.UPDATE_USERS_AVAILABILITY:
        return updateUsersAvailability(state, action);
    case actionTypes.ADD_USER_TO_LIST:
        return [...state, [action.payload[0], action.payload[1], false]];
    case actionTypes.TOGGLE_USER_FOR_CHAT:
        return toggleUserSelected(state, action);
    case actionTypes.ACHIEVE_CREATE_CHAT:
        return resetUsersSelected(state);
    case actionTypes.ACHIEVE_LOGOUT:
        return [];
    default:
        return state;
    }
};

export const usersStatus = (state = {
    errorMessage: '',
    isLoading: false,
}, action) => {
    switch (action.type) {
    case actionTypes.REQUEST_FETCH_USERS:
        return {
            errorMessage: '',
            isLoading: true,
        };
    case actionTypes.REJECT_FETCH_USERS:
        return {
            errorMessage: action.payload,
            isLoading: false,
        };
    case actionTypes.ACHIEVE_FETCH_USERS:
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
