import {AdminPermissions ,TrainerPermission} from '../services/permissions';

const initialState = {
    isLoggedIn : false,
    token:null,
    userDetails : null,
    activeRoute:'0',
    userOptions:null,
    loginError : null   
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_ACTIVE_ROUTE':
            return {
                ...state,
                activeRoute : action.payload
            }
        case 'LOGIN':
            if(action.payload2.type==='ADMIN'){
                return {
                    ...state,
                    isLoggedIn : true,
                    token:action.payload1,
                    userDetails : action.payload2,
                    userOptions : AdminPermissions

                }
            }
            else{
                return {
                    ...state,
                    isLoggedIn : true,
                    token:action.payload1,
                    userDetails : action.payload2,
                    userOptions : TrainerPermission

                }

            }
            
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn : false,
                token : null,
                userDetails : null,
                loginError : action.payload1
            }
        default:
            return state;
    }
}