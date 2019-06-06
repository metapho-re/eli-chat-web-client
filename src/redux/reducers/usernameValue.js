import * as actionTypes from '../actionTypes';

const usernameValue = (state = '', action) => {
    switch (action.type) {
    case actionTypes.HANDLE_USERNAME_CHANGE:
        return action.payload.replace(/[^0-9a-z-]/gi, '');
    case actionTypes.ACHIEVE_LOGIN:
        return '';
    case actionTypes.ACHIEVE_SIGNUP:
        return '';
    default:
        return state;
    }
};

export default usernameValue;
