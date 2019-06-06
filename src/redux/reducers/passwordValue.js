import * as actionTypes from '../actionTypes';

const passwordValue = (state = '', action) => {
    switch (action.type) {
    case actionTypes.HANDLE_PASSWORD_CHANGE:
        return action.payload;
    case actionTypes.ACHIEVE_LOGIN:
        return '';
    case actionTypes.ACHIEVE_SIGNUP:
        return '';
    case actionTypes.REJECT_AUTHENTICATE:
        return '';
    default:
        return state;
    }
};

export default passwordValue;
