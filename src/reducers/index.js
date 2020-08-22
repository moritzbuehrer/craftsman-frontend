import { combineReducers } from 'redux'

import customer from './customer';
import project from './project';


export default combineReducers({
    customer,
    project
})