<<<<<<< HEAD
import {AdminPermissions ,TrainerPermission} from '../services/permissions';

const initialState = {
    isLoggedIn : false,
    token:null,
    userDetails : null,
    activeRoute:'0',
    activeurl : '/',
    userOptions:null,
    loginError : null   
=======
import { ADMIN_PERMISSIONS, TRAINER_PERMISSIONS} from '../services/userOption';

const initialState = {
    isLoggedIn : false,
    userDetails : {

    },
    activeRoute:'0',
    userOptions:[]
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_ACTIVE_URL':
            return {
                ...state,
                activeurl : action.payload
            }
        case 'CHANGE_ACTIVE_ROUTE':
            return {
                ...state,
                activeRoute : action.payload
            }
        case 'LOGIN':
<<<<<<< HEAD
            if(action.payload2.type==='ADMIN'){
                return {
                    ...state,
                    isLoggedIn : true,
                    token:action.payload1,
                    userDetails : action.payload2,
                    userOptions : AdminPermissions

=======
            if(action.payload.type==='ADMIN'){
                return {
                    ...state,
                    isLoggedIn : true,
                    userDetails:{
                        ...action.payload
                    },
                    userOptions : ADMIN_PERMISSIONS                    
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
                }
            }
            else{
                return {
                    ...state,
                    isLoggedIn : true,
<<<<<<< HEAD
                    token:action.payload1,
                    userDetails : action.payload2,
                    userOptions : TrainerPermission

                }

=======
                    userDetails:{
                        ...action.payload
                    },
                    userOptions : TRAINER_PERMISSIONS
                }
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
            }
            
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn : false,
<<<<<<< HEAD
                token : null,
                userDetails : null,
                loginError : action.payload1
=======
                userDetails :{

                }
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
            }
        default:
            return state;
    }
}