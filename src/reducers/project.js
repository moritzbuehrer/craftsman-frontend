import { SET_PROJECT_WORKING_TIME } from "../constants/actionTypes";

const initialState = {
    currentProject: {
        id: "2020-03-0001",
        externalId: "987654321",
        name: "Kernsanierung",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        customerId: "1",
        totalWorkingHours: 0,
        timeTracks: []
    },
    projects: [
        {
            id: '1',
            name: 'Project 1',
            age: 'Test GmbH',
            address: 'New York No. 1 Lake Park',
            status: 'In Progress'
        },
        {
            id: '2',
            name: 'Project 2',
            age: 'Test GmbH',
            address: 'London No. 1 Lake Park',
            status: 'In Progress'
        },
        {
            id: '3',
            name: 'Project 4',
            age: 'Test GmbH',
            address: 'Sidney No. 1 Lake Park',
            status: 'In Progress'
        }
    ],
    loading: false,
    error: null
};

function project(state = initialState, action) {

    switch (action.type) {

        case SET_PROJECT_WORKING_TIME:
            return {
                ...state,
                currentProject: {
                    ...state.currentProject,
                    timeTracks: state.currentProject.timeTracks.concat(action.workingTime),
                    totalWorkingHours: state.currentProject.totalWorkingHours + parseInt(action.workingTime.workingTime)
                }
            }

        default:
            return state;
    }
}

export default project;