import axios from 'axios';
import { TOGGLE_SHOW_NEW_CUSTOMER_MODAL, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_ERROR, GET_ALL_CUSTOMERS_SUCCESS, GET_ALL_CUSTOMERS_ERROR, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_ERROR } from './../constants/actionTypes';
import { message } from 'antd';
import { startLoading } from './general';

export function toggleNewCustomerModal() {
    return {
        type: TOGGLE_SHOW_NEW_CUSTOMER_MODAL
    }
};

export function postCustomerSuccess(customer) {
    return {
        type: POST_CUSTOMER_SUCCESS,
        customer: customer
    }
};

export function postCustomerError(error) {
    return {
        type: POST_CUSTOMER_ERROR,
        error: error
    }
};

export const postCustomer = (formCustomer, history) => {
    return (dispatch) => {
        dispatch(startLoading());

        var customer = {
            "name": formCustomer.name,
            "firstName": formCustomer.firstName,
            "phone": formCustomer.phone,
            "email": formCustomer.mail,
            "address": {
                "type": "MAIN",
                "street": formCustomer.street,
                "number": formCustomer.number,
                "postcode": formCustomer.postcode,
                "city": formCustomer.city,
                "country": formCustomer.country
            }

        }

        axios.post(process.env.REACT_APP_DOMAIN + '/customer', customer)
            .then(res => {
                dispatch(postCustomerSuccess(res.data));
                history.push('customer/' + res.data.id);
                message.success('Neuer Kunde erfolgreich angelegt');
            })
            .catch(error => {
                message.error('Fehler beim Anlegen eines neuen Kunden');
                dispatch(postCustomerError(error))
            })
    }
}

export function getAllCustomersSuccess(customers) {
    return {
        type: GET_ALL_CUSTOMERS_SUCCESS,
        customers: customers
    }
};

export function getAllCustomersError(error) {
    return {
        type: GET_ALL_CUSTOMERS_ERROR,
        error: error
    }
};

export const getAllCustomers = () => {
    return (dispatch) => {

        dispatch(startLoading());

        axios.get(process.env.REACT_APP_DOMAIN + '/customer')
            .then(res => {

                var customers = [];
                res.data.forEach(function (customer, index) {
                    customers.push({
                        id: customer.id,
                        name: customer.name,
                        firstName: customer.firstName,
                        phoneNumber: customer.phoneNumber,
                        email: customer.email
                    });
                });

                dispatch(getAllCustomersSuccess(customers));

            })
            .catch(error => {
                message.error('Fehler beim laden der Kunden');
                dispatch(getAllCustomersError(error))
            })
    }
}

export function getCustomerSuccess(customer) {
    return {
        type: GET_CUSTOMER_SUCCESS,
        customer: customer
    }
};

export function getCustomerError(error) {
    return {
        type: GET_CUSTOMER_ERROR,
        error: error
    }
};

export const getCustomer = (customerId) => {
    return (dispatch) => {

        dispatch(startLoading());

        axios.get(process.env.REACT_APP_DOMAIN + '/customer/' + customerId)
            .then(res => {

                dispatch(getCustomerSuccess(res.data));

            })
            .catch(error => {
                message.error('Fehler beim laden des Kunden');
                dispatch(getCustomerError(error))
            })
    }
}
