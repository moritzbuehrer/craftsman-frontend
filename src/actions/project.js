import { SET_PROJECT_WORKING_TIME, RESET_PROJECT_MESSAGE } from "../constants/actionTypes";
import { TOGGLE_SHOW_TIME_TRACK_MODAL, SET_PROJECT_NOTES, TOGGLE_SHOW_NEW_PROJECT_MODAL } from './../constants/actionTypes';

export function setWorkingTime(workingTime) {
    return {
        type: SET_PROJECT_WORKING_TIME,
        workingTime: workingTime
    }
};

export function resetProjectMessage() {
    return {
        type: RESET_PROJECT_MESSAGE
    }
};

export function toggleShowTimeTrackModal() {
    return {
        type: TOGGLE_SHOW_TIME_TRACK_MODAL
    }
};

export function toggleShowNewProjectModal() {
    return {
        type: TOGGLE_SHOW_NEW_PROJECT_MODAL
    }
};

export function setProjectNotes(notes) {
    return {
        type: SET_PROJECT_NOTES,
        notes: notes

    }
};