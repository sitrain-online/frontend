import { combineReducers } from 'redux'; 
import openDrawer from './opendrawer';
import adminAction from './admin';
import userAction from './loggedinuser'
import trainerAction from './trainer';

export default combineReducers({
    drawer : openDrawer,
    admin : adminAction,
    user : userAction,
    trainer : trainerAction
})