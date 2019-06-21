const initialState = {
    modalOpened : false,
    confirmDirty: false,
    mode : 'Register',
    trainerId : null,
    searchText : '',
    trainerTableLoading : false,    
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_MODAL_STATE':
            return {
                ...state,
                modalOpened : action.payload1,
                trainerId : action.payload2
            }
        case 'CHANGE_TRAINER_FORM_CONFIRMdIRTY':
            return {
                ...state,
                confirmDirty : action.payload
            }
        case 'CHANGE_TRAINER_FORM_MODE':
            return {
                ...state,
                mode : action.payload
            }
        case 'CHANGE_SEARCH_TEXT':
                return {
                    ...state,
                    searchText : action.payload
                }
        case 'CHANGE_TRAINER_TABLE_LOADING_STATUS':
                return {
                    ...state,
                    trainerTableLoading : action.payload
                }
        default:
            return state;
    }
}