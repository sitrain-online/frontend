export const changeStep = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_ACTIVE_STEP',
       payload : d
    })
}

export const changeBasicNewTestDetails = (d)=> dispatch =>{
    dispatch({
        type: 'CHANGE_BASIC_NEW_TEST_DETAILS',
        payload:d
    })
}