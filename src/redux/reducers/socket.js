import * as actionTypes from '../actionTypes';

const socket = (state = {
    id: '',
    errorMessage: '',
}, action) => {
    switch (action.type) {
    case actionTypes.STORE_SOCKET_ID:
        return {
            ...state,
            id: action.payload,
        };
    case actionTypes.GET_SOCKET_ERROR:
        return {
            ...state,
            errorMessage: action.payload,
        };
    case actionTypes.CLEAR_ERROR_MESSAGE:
        return {
            ...state,
            errorMessage: '',
        };
    case actionTypes.ACHIEVE_LOGOUT:
        return {
            ...state,
            errorMessage: '',
        };
    default:
        return state;
    }
};

export default socket;
