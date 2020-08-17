
import { FETCH_CUSTOMERS_LOADING, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR } from './../constants/actionTypes';

const initialState = {
    customers: [],
    loading: false,
    error: null
};

function customerReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_CUSTOMERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.customers
            }
        case FETCH_CUSTOMERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default customerReducer;