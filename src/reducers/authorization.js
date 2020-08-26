import { TOGGLE_LOGIN } from "../constants/actionTypes";

const initialState = {
    id: "",
    username: "",
    token: "",
    refreshToken: "",
    roles: [],
    loggedIn = true,

};

function authorization(state = initialState, action) {

    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                loggedIn: !state.loggedIn
            }
        default:
            return state;
    }
}

export default customer;