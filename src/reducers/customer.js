
import { FETCH_CUSTOMERS_START, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR, SET_CURRENT_CUSTOMER, TOGGLE_CUSTOMER_CHANGE } from './../constants/actionTypes';

const initialState = {
    currentCustomer: {
        id: '1',
        name: 'Bau GmbH',
        firstName: '',
        phone: '018863648176',
        email: 'test@web.de',
        street: 'Test Ave. 8',
        postcode: '87967',
        city: 'Hamburg',
        country: 'DE'
    },
    customers: [
        {
            id: '1',
            name: 'Bau GmbH',
            firstName: '',
            phone: '018863648176',
            email: 'test@web.de',
            street: 'Test Ave. 8',
            postcode: '87967',
            city: 'Hamburg',
            country: 'DE'
        },
        {
            id: '2',
            name: 'Maler GmbH',
            firstName: '',
            phone: '018863648176',
            email: 'test@web.de',
            street: 'Berlin Ave. 8',
            postcode: '87967',
            city: 'Berlin',
            country: 'DE'
        },
        {
            id: '3',
            name: 'Müller',
            firstName: 'Thomas',
            phone: '018863648176',
            email: 'test@web.de',
            street: 'Freibrug Ave. 8',
            postcode: '87967',
            city: 'Freibrug',
            country: 'DE'
        }
    ],
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