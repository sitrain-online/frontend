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

