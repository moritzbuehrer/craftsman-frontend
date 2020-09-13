import axios from 'axios';

import { TOGGLE_SHOW_NEW_EMPLOYEE_MODAL, POST_EMPLOYEE_SUCCESS, POST_EMPLOYEE_ERROR, GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_EMPLOYEES_ERROR } from './../constants/actionTypes';

import { startLoading } from './general';
import { message } from 'antd';

export function toggleNewEmployeeModal() {
    return {
        type: TOGGLE_SHOW_NEW_EMPLOYEE_MODAL
    }
};

export function postEmployeeSuccess(employee) {
    return {
        type: POST_EMPLOYEE_SUCCESS,
        employee: employee
    }
};

export function postEmployeeError(error) {
    return {
        type: POST_EMPLOYEE_ERROR,
        error: error
    }
};

export const postEmployee = (formEmployee, history) => {
    return (dispatch) => {
        dispatch(startLoading());

        var employee = {
            "name": formEmployee.name,
            "firstName": formEmployee.firstName,
            "phone": formEmployee.phone,
            "mobile": formEmployee.mobile,
            "email": formEmployee.mail,
            "address": {
                "type": "MAIN",
                "street": formEmployee.street,
                "number": formEmployee.number,
                "postcode": formEmployee.postcode,
                "city": formEmployee.city,
                "country": formEmployee.country
            }

        }

        axios.post(process.env.REACT_APP_DOMAIN +'/employee', employee)
            .then(res => {
                dispatch(postEmployeeSuccess(res.data));
                //history.push('employee/' + res.data.id);
                message.success('Neuer Mitarbeiter erfolgreich angelegt');
            })
            .catch(error => {
                message.error('Fehler beim Anlegen eines neuen Mitarbeiters');
                dispatch(postEmployeeError(error))
            })
    }
}

export function getAllEmployeesSuccess(employees) {
    return {
        type: GET_ALL_EMPLOYEES_SUCCESS,
        employees: employees
    }
};

export function getAllEmployeesError(error) {
    return {
        type: GET_ALL_EMPLOYEES_ERROR,
        error: error
    }
};

export const getAllEmployees = () => {
    return (dispatch) => {
        dispatch(startLoading());

        axios.get(process.env.REACT_APP_DOMAIN +'/employee')
            .then(res => {
                dispatch(getAllEmployeesSuccess(res.data));
            })
            .catch(error => {
                message.error('Fehler beim Anlegen eines neuen Mitarbeiters');
                dispatch(getAllEmployeesError(error))
            })
    }
}