const initialState = {
    greet : 'Hi',
    currentStep:0,
    newtestFormData:{
        testType:null,
        testTitle: '',
        testDuration : 60,
        OrganisationName:null,
        testSubject:[],
        testQuestions:[]
    }

}


export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_ACTIVE_STEP':
            return {
                ...state,
                currentStep : action.payload
            }
        case 'CHANGE_BASIC_NEW_TEST_DETAILS':
            return{
                ...state,
                newtestFormData :{
                    ...state.newtestFormData,
                    ...action.payload
                }
            }
        
        default:
            return state;
    }
}