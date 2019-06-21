export const ChangeTrainerModalState = (d1,d2,d3)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_MODAL_STATE',
       payload1 : d1,
       payload2 : d2,
       payload3 : d3
    })
}
export const ChangeTrainerConfirmDirty = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_FORM_CONFIRMdIRTY',
       payload : d
    })
}


export const ChangeTrainerSearchText = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_SEARCH_TEXT',
       payload : d
    })
}

export const ChangeTrainerTableData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_TABLE_LOADING_STATUS',
       payload : d
    })
}

export const ChangeSubjectModalState = (d1,d2,d3)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SUBJECT_MODAL_STATE',
       payload1 : d1,
       payload2 : d2,
       payload3 : d3
    })
}
export const ChangeSubjectConfirmDirty = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SUBJECT_FORM_CONFIRMdIRTY',
       payload : d
    })
}


export const ChangeSubjectSearchText = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SUBJECT_SEARCH_TEXT',
       payload : d
    })
}

export const ChangeSubjectTableData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SUBJECT_TABLE_LOADING_STATUS',
       payload : d
    })
}
