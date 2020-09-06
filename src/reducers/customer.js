import { TOGGLE_SHOW_NEW_CUSTOMER_MODAL, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_ERROR, GET_ALL_CUSTOMERS_SUCCESS, GET_ALL_CUSTOMERS_ERROR, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_ERROR } from './../constants/actionTypes';

const initialState = {
    currentCustomer: {
        id: "",
        name: "",
        firstName: "",
        phone: "",
        email: "",
        addresses: [
            {
                id: "",
                type: "MAIN",
                street: "",
                number: "",
                postcode: "",
                city: "",
                country: ""
            }
        ]
    },
    customers: [],
    showNewCustomerModal: false
};

function customer(state = initialState, action) {

    switch (action.type) {
        case TOGGLE_SHOW_NEW_CUSTOMER_MODAL:
            return {
                ...state,
                showNewCustomerModal: !state.showNewCustomerModal
            }
        case POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                currentCustomer: action.customer,
                customers: [...state.customers, action.customer],
                showNewCustomerModal: false
            }
        case GET_ALL_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.customers
            }
        case GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                currentCustomer: action.customer,
                showNewCustomerModal: false
            }
        case POST_CUSTOMER_ERROR:
        case GET_ALL_CUSTOMERS_ERROR:
        case GET_CUSTOMER_ERROR:
            return {
                ...state,
                showNewCustomerModal: false
            }
        default:
            return state;
    }
}

export default customer;