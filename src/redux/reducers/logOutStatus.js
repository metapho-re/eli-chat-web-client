import * as actionTypes from '../actionTypes';

const logOutStatus = (state = {
    isLoading: false,
    errorMessage: '',
}, action) => {
    switch (action.type) {
    case actionTypes.REQUEST_LOGOUT:
        return {
            isLoading: true,
            errorMessage: '',
        };
    case actionTypes.REJECT_LOGOUT:
        return {
            isLoading: false,
            errorMessage: action.payload,
        };
    case actionTypes.CLEAR_ERROR_MESSAGE:
        return {
            ...state,
            errorMessage: '',
        };
    case actionTypes.ACHIEVE_LOGOUT:
        return {
            isLoading: false,
            errorMessage: '',
        };
    default:
        return state;
    }
};

export default logOutStatus;
