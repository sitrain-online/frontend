import { combineReducers } from 'redux'; 
import openDrawer from './opendrawer';
import adminAction from './admin';
import userAction from './loggedinuser'

export default combineReducers({
    drawer : openDrawer,
    admin : adminAction,
    user : userAction
})