import { combineReducers } from 'redux'

import customer from './customer';
import project from './project';
import general from './general';


export default combineReducers({
    customer,
    project,
    general
})