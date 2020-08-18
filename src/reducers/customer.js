
import { FETCH_CUSTOMERS_START, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR, SET_CURRENT_CUSTOMER, TOGGLE_CUSTOMER_CHANGE } from './../constants/actionTypes';

const initialState = {
    currentCustomer: {
        firstName: "",
        lastName: ""
    },
    customers: [],
    loading: false,
    error: null,
    changeMode: false
};

function customer(state = initialState, action) {

    switch (action.type) {

        case FETCH_CUSTOMERS_START:
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
        case SET_CURRENT_CUSTOMER:
            return {
                ...state,
                currentCustomer: {
                    id: action.customer.id,
                    firstName: action.customer.firstName,
                    lastName: action.customer.name,
                    phoneNumber: action.customer.phoneNumber,
                    email: action.customer.email
                }
            }
        case TOGGLE_CUSTOMER_CHANGE:
            return {
                ...state,
                changeMode: !state.changeMode
            }

        default:
            return state;
    }
}

export default customer;