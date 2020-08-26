import { SET_PROJECT_WORKING_TIME } from "../constants/actionTypes";
import { TOGGLE_SHOW_TIME_TRACK_MODAL, SET_PROJECT_NOTES } from './../constants/actionTypes';

export function setWorkingTime(workingTime) {
    return {
        type: SET_PROJECT_WORKING_TIME,
        workingTime: workingTime
    }
};

export function toggleShowTimeTrackModal() {
    return {
        type: TOGGLE_SHOW_TIME_TRACK_MODAL
    }
};

export function setProjectNotes(notes) {
    return {
        type: SET_PROJECT_NOTES,
        notes: notes

    }
};