const initialState = {
    testbegins : true,
    startedWriting:true,
    testconducted:false,
    LocaltestDone:true
}


export default (state = initialState, action )=>{
    switch(action.type){
        case 'TEST_DONE_LOCAL':
            return {
                ...state,
                LocaltestDone : true
            }
        default:
            return state;
    }
}