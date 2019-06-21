export const ChangeModalState = (d1,d2)=> dispatch =>{
    dispatch({
       type : 'CHANGE_MODAL_STATE',
       payload1 : d1,
       payload2 : d2
    })
}
export const ChangeConfirmDirty = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_FORM_CONFIRMdIRTY',
       payload : d
    })
}

export const ChangeFormMode = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_FORM_MODE',
       payload : d
    })
}

export const ChangeSearchText = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SEARCH_TEXT',
       payload : d
    })
}

export const ChangeTrainerTableData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TRAINER_TABLE_LOADING_STATUS',
       payload : d
    })
}

