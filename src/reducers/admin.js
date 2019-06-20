const initialState = {
    confirmDirty: false,
    searchText : '',
    mode : 'Register'
}

export default (state = initialState, action )=>{
    switch(action.type){
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
        default:
            return state;
    }
}