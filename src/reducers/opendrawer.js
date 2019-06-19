import { OPEN_DRAWER, CLOSE_DRAWE } from '../actions/types';


const initialState = {
    
}

export default (state = initialState, action )=>{
    switch(action.type){
        case OPEN_DRAWER:
            return {
                ...state,
                drawerOpenState : 'hi'
            } 
        default:
            return state;
    }
}