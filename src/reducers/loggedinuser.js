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
            link : '/user/listtrainer'
        },
        {
            display : 'All Subjects',
            icon : 'file-text',
            link : '/user/listsubjects' 
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
        default:
            return state;
    }
}