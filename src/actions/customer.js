
import { FETCH_CUSTOMERS_START, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR, SET_CURRENT_CUSTOMER, TOGGLE_CUSTOMER_CHANGE } from './../constants/actionTypes';
import customer from './../reducers/customer';

export function toggleCustomerChange() {
    return {
        type: TOGGLE_CUSTOMER_CHANGE
    }
};

export function setCurrentCustomer(customer) {
    return {
        type: SET_CURRENT_CUSTOMER,
        customer: customer
    }
};

function fetchCustomersLoading(payload) {
    return {
        type: FETCH_CUSTOMERS_START
    }
};

function fetchCustomersSuccess(customers) {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        customers: customers
    }
};

function fetchCustomersError(error) {
    return {
        type: FETCH_CUSTOMERS_ERROR,
        error: error
    }
};

export function fetchCustomers() {
    return (dispatch) => {
        dispatch(fetchCustomersLoading());
        fetch('http://localhost:8080/customer')
            .then(res => res.json())
            .then(res => {

                var customers = [];

                res.forEach(function (customer, index) {
                    customers.push({
                        id: customer.id,
                        name: customer.name,
                        firstName: customer.firstName,
                        phoneNumber: customer.phoneNumber,
                        email: customer.email
                    });
                });

                dispatch(fetchCustomersSuccess(customers));
            })
            .catch(error => {
                dispatch(fetchCustomersError(error));
                console.log(error);
            })
    }
}