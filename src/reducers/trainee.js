const initialState = {
    testbegins : true,
    startedWriting:true,
    testconducted:false
}


export default (state = initialState, action )=>{
    switch(action.type){
        case '':
            return {
                
            }
        default:
            return state;
    }
}