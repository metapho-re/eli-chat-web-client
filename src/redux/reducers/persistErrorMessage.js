import * as actionTypes from '../actionTypes';

const persistErrorMessage = (state = '', action) => {
    switch (action.type) {
    case actionTypes.GET_PERSIST_ERROR:
        return action.payload;
    case actionTypes.CLEAR_ERROR_MESSAGE:
        return '';
    case actionTypes.ACHIEVE_LOGOUT:
        return '';
    default:
        return state;
    }
};

export default persistErrorMessage;
