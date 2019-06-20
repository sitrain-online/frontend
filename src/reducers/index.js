import { combineReducers } from 'redux'; 
import openDrawer from './opendrawer';
import adminAction from './admin';

export default combineReducers({
    drawer : openDrawer,
    admin : adminAction
})