import axios from 'axios';

import { message } from 'antd';
import {
    POST_TIME_TRACK_SUCCESS,
    POST_TIME_TRACK_ERROR,
    GET_TIME_TRACKS_BY_PROJECT_SUCCESS,
    GET_TIME_TRACKS_BY_PROJECT_ERROR
} from './../constants/actionTypes';
import { startLoading } from './general';


export function getTimeTracksByProjectSuccess(timeTracks) {
    return {
        type: GET_TIME_TRACKS_BY_PROJECT_SUCCESS,
        timeTracks: timeTracks
    }
};

export function getTimeTracksByProjectError(error) {
    return {
        type: GET_TIME_TRACKS_BY_PROJECT_ERROR,
        error: error
    }
};

export const getTimeTracksByProject = (projectId) => {
    return (dispatch) => {

        axios.get(process.env.REACT_APP_DOMAIN + '/project/' + projectId + '/timeTrack')
            .then(res => {
                dispatch(getTimeTracksByProjectSuccess(res.data))
            })
            .catch(error => {
                dispatch(getTimeTracksByProjectError(error))
                message.error('Fehler beim Laden der Arbeitszeiten');
            })
    }
}


export function postTimeTrackSuccess(timeTrack) {
    return {
        type: POST_TIME_TRACK_SUCCESS,
        timeTrack: timeTrack
    }
};

export function postTimeTrackError(error) {
    return {
        type: POST_TIME_TRACK_ERROR,
        error: error
    }
};

export const postTimeTrack = (formTimeTrack) => {
    return (dispatch, getState) => {
        dispatch(startLoading());

        var timeTrack = {
            duration: formTimeTrack.duration,
            note: formTimeTrack.note,
            date: null,
            employeeId: null
        }

        if (getState().project.currentProject.id !== null) {
            axios.post(process.env.REACT_APP_DOMAIN + '/project/' + getState().project.currentProject.id + '/timeTrack', timeTrack)
                .then(res => {
                    dispatch(postTimeTrackSuccess(res.data))
                })
                .catch(error => {
                    dispatch(postTimeTrackError(error))
                    message.error('Fehler beim anlegen der Arbeitszeit');
                })
        }

    }
}