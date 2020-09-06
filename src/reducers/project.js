import { SET_PROJECT_WORKING_TIME, POST_PROJECT_SUCCESS } from "../constants/actionTypes";
import { TOGGLE_SHOW_TIME_TRACK_MODAL, TOGGLE_SHOW_NEW_PROJECT_MODAL, POST_PROJECT_ERROR, GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_ERROR, GET_PROJECT_ERROR, GET_PROJECT_SUCCESS } from './../constants/actionTypes';

const initialState = {
    currentProject: {
        id: "2020-03-0001",
        externalId: "987654321",
        name: "Kernsanierung",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        status: "",
        customer: {},
        timeTracks: [],
        address:
        {
            id: "",
            type: "MAIN",
            street: "",
            number: "",
            postcode: "",
            city: "",
            country: ""
        },

        startDate: '01.01.2020',
        plannedEndDate: '01.01.2021',
        customerId: "1",
        contactPerson: {
            id: 1,
            name: 'Marc-Robin',
            phone: '0127478236324',
            mail: 'test@mail.de'
        },
        notes: "Initial Note",

    },
    projects: [],
    showTimeTrackModal: false,
    showNewProjectModal: false
};

function project(state = initialState, action) {

    switch (action.type) {
        case TOGGLE_SHOW_TIME_TRACK_MODAL:
            return {
                ...state,
                showTimeTrackModal: !state.showTimeTrackModal
            }
        case TOGGLE_SHOW_NEW_PROJECT_MODAL:
            return {
                ...state,
                showNewProjectModal: !state.showNewProjectModal
            }
        case GET_PROJECT_ERROR:
        case GET_ALL_PROJECTS_ERROR:
        case POST_PROJECT_ERROR:
            return {
                ...state,
                showNewProjectModal: false
            }
        case POST_PROJECT_SUCCESS:
            return {
                ...state,
                currentProject: action.project,
                projects: [...state.projects, action.project],
                showNewProjectModal: false
            }
        case GET_ALL_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects,
                showNewProjectModal: false
            }
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                currentProject: action.project,
                showNewProjectModal: false
            }



        case SET_PROJECT_WORKING_TIME:
            return {
                ...state,
                currentProject: {
                    ...state.currentProject,
                    timeTracks: state.currentProject.timeTracks.concat(action.workingTime)
                },
                messcustomer: 'Arbeitszeit erfolgreich erfasst'
            }
        default:
            return state;
    }
}

export default project;