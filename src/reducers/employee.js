
import { TOGGLE_SHOW_NEW_EMPLOYEE_MODAL, POST_EMPLOYEE_SUCCESS, GET_ALL_EMPLOYEES_SUCCESS } from './../constants/actionTypes';
const initialState = {
    currentEmployee: {
        name: "",
        firstName: "",
        phone: "",
        mobile: "",
        email: "",
        address: 
        {
            id: "",
            type: "MAIN",
            street: "",
            number: "",
            postcode: "",
            city: "",
            country: ""
        }

    },
    employees: [],
    showNewEmployeeModal: false
};

function general(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SHOW_NEW_EMPLOYEE_MODAL:
            return {
                ...state,
                showNewEmployeeModal: !state.showNewEmployeeModal
            }
        case POST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                currentEmployee: action.employee,
                employees: [...state.employees, action.employee],
                showNewEmployeeModal: false
            }
        case GET_ALL_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.employees
            }
        default:
            return state;
    }
}

export default general;