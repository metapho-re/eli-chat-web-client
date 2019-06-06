import * as actionTypes from '../actionTypes';

const messageValue = (state = '', action) => {
    switch (action.type) {
    case actionTypes.HANDLE_MESSAGE_CHANGE:
        return action.payload;
    case actionTypes.STORE_SENT_MESSAGE:
        return '';
    case actionTypes.ACHIEVE_LOGOUT:
        return '';
    default:
        return state;
    }
};

export default messageValue;
