import { START_LOADING, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_ERROR, GET_ALL_CUSTOMERS_SUCCESS, GET_ALL_CUSTOMERS_ERROR, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_ERROR, POST_PROJECT_SUCCESS, POST_PROJECT_ERROR, GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_ERROR, GET_PROJECT_SUCCESS, GET_PROJECT_ERROR, POST_TIME_TRACK_SUCCESS, POST_TIME_TRACK_ERROR, POST_EMPLOYEE_SUCCESS, POST_EMPLOYEE_ERROR, GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_EMPLOYEES_ERROR } from './../constants/actionTypes';
const initialState = {
    loading: false,
    error: null
};

function general(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        // Success
        case GET_ALL_EMPLOYEES_SUCCESS:
        case POST_EMPLOYEE_SUCCESS:
        case POST_TIME_TRACK_SUCCESS:
        case GET_PROJECT_SUCCESS:
        case GET_ALL_PROJECTS_SUCCESS:
        case POST_PROJECT_SUCCESS:
        case GET_ALL_CUSTOMERS_SUCCESS:
        case GET_CUSTOMER_SUCCESS:
        case POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        // Error
        case GET_ALL_EMPLOYEES_ERROR:
        case POST_EMPLOYEE_ERROR:
        case POST_TIME_TRACK_ERROR:
        case GET_PROJECT_ERROR:
        case GET_ALL_PROJECTS_ERROR:
        case POST_PROJECT_ERROR:
        case GET_ALL_CUSTOMERS_ERROR:
        case GET_CUSTOMER_ERROR:
        case POST_CUSTOMER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default general;