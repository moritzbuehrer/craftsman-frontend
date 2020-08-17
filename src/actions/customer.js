
import { FETCH_CUSTOMERS_LOADING, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_ERROR } from './../constants/actionTypes';

export function fetchCustomersLoading(payload) {
    return {
        type: FETCH_CUSTOMERS_LOADING
    }
};

export function fetchCustomersSuccess(customers) {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        customers: customers
    }
};

export function fetchCustomersError(error) {
    return {
        type: FETCH_CUSTOMERS_ERROR,
        error: error
    }
};

export function fetchCustomers() {
    return dispatch => {
        console.log("fetch")
        dispatch(fetchCustomersLoading());
        fetch('https://exampleapi.com/products')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchCustomersSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchCustomersError(error));
                console.log(error);
            })
    }
}