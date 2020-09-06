
import { START_LOADING, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_ERROR, GET_ALL_CUSTOMERS_SUCCESS, GET_ALL_CUSTOMERS_ERROR, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_ERROR } from './../constants/actionTypes';
const initialState = {
    loading: false,
    error: null
};

function general(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        // Success
        case GET_ALL_CUSTOMERS_SUCCESS:
        case GET_CUSTOMER_SUCCESS:
        case POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        // Error
        case GET_ALL_CUSTOMERS_ERROR:
        case GET_CUSTOMER_ERROR:
        case POST_CUSTOMER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default general;