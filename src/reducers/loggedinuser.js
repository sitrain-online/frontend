const initialState = {
    isLoggedIn : false,
    userType : 'admin',
    userDetails : {

    },
    activeRoute:'0',
    userOptions:[
        {
            display : 'All Trainers',
            icon : 'user',
            link : '/user/listtrainers'
        },
        {
            display : 'All Subjects',
            icon : 'file-text',
            link : '/user/listsubjects' 
        },
        {
            display : 'All Questions',
            icon : 'question-circle',
            link : '/user/listquestions'
        },
        {
            display : 'All tests',
            icon : 'form',
            link : '/user/listtests'
        }

    ]   
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_ACTIVE_ROUTE':
            return {
                ...state,
                activeRoute : action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn : true
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn : false
            }
        default:
            return state;
    }
}