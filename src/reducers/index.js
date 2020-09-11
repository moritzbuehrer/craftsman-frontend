import { combineReducers } from 'redux'

import customer from './customer';
import project from './project';
import general from './general';
import employee from './employee';


export default combineReducers({
    customer,
    project,
    employee,
    general
})