import { SET_PROJECT_WORKING_TIME } from "../constants/actionTypes";

export function setWorkingTime(workingTime) {
    return {
        type: SET_PROJECT_WORKING_TIME,
        workingTime: workingTime
    }
};