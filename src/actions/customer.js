import { ADD_CUSTOMER } from './../constants/actionTypes';

export function addCustomer(payload) {
    return {
        type: ADD_CUSTOMER,
        payload
    }
};