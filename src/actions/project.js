import axios from 'axios';

import {
    TOGGLE_SHOW_TIME_TRACK_MODAL,
    TOGGLE_SHOW_NEW_PROJECT_MODAL,
    POST_PROJECT_ERROR,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_ERROR,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_ERROR,
    POST_PROJECT_SUCCESS
} from './../constants/actionTypes';
import { startLoading } from './general';
import { message } from 'antd';
import { getTimeTracksByProject } from './timeTrack';

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


export function postProjectSuccess(project) {
    return {
        type: POST_PROJECT_SUCCESS,
        project: project
    }
};

export function postProjectError(error) {
    return {
        type: POST_PROJECT_ERROR,
        error: error
    }
};

export const postProject = (formProject, history) => {
    return (dispatch) => {
        dispatch(startLoading());

        var custId = formProject.customerId.replace(/(^\d+)(.+$)/i, '$1');
        var project = {
            externalId: "",
            name: formProject.name,
            description: "",
            status: "Erstellt",
            customer: {
                id: custId
            },
            timeTracks: [],
            address: {
                type: "MAIN",
                street: formProject.street,
                number: formProject.number,
                postcode: formProject.postcode,
                city: formProject.city,
                country: formProject.country
            },
        }

        axios.post('http://localhost:8080/project', project)
            .then(res => {
                dispatch(postProjectSuccess(res.data))
                history.push('project/' + res.data.id);
                message.success('Neues Projekt erfolgreich angelegt');
            })
            .catch(error => {
                dispatch(postProjectError(error))
                message.error('Fehler beim Anlegen eines neuen Projekts');
            })
    }
}

export function getAllProjectsSuccess(projects) {
    return {
        type: GET_ALL_PROJECTS_SUCCESS,
        projects: projects
    }
};

export function getAllProjectsError(error) {
    return {
        type: GET_ALL_PROJECTS_ERROR,
        error: error
    }
};

export const getAllProjects = () => {
    return (dispatch) => {
        dispatch(startLoading());

        axios.get('http://localhost:8080/project')
            .then(res => {
                dispatch(getAllProjectsSuccess(res.data))
            })
            .catch(error => {
                dispatch(getAllProjectsError(error))
                message.error('Fehler beim Laden der Projekte');
            })
    }
}

export function getProjectSuccess(project) {
    return {
        type: GET_PROJECT_SUCCESS,
        project: project
    }
};

export function getProjectError(error) {
    return {
        type: GET_PROJECT_ERROR,
        error: error
    }
};

export const getProject = (projectId) => {
    return (dispatch) => {
        dispatch(startLoading());

        axios.get('http://localhost:8080/project/' + projectId)
            .then(res => {
                dispatch(getProjectSuccess(res.data))
                dispatch(getTimeTracksByProject(projectId))
            })
            .catch(error => {
                dispatch(getProjectError(error))
                message.error('Fehler beim Laden des Projekts');
            })
    }
}

