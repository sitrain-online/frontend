export const LocaltestDone = (d)=> dispatch =>{
    dispatch({
        type : 'TEST_DONE_LOCAL'
    })
}



export const ChangeQuestion = (d)=>dispatch=>{
    dispatch({
        type:'SWITCH_QUESTION',
        payload: d
    })
}