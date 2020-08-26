const { TOGGLE_LOGIN } = require("../constants/actionTypes");

export function toggleLogin() {
    return {
        type: TOGGLE_LOGIN
    }
};