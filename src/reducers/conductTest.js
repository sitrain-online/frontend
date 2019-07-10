const initialState = { 
    id : null,
    testRegisterLink:'',
    basictestdetails:{
        isRegistrationavailable:null
    }
}
export default (state = initialState, action )=>{
    switch(action.type){
        case 'SET_CONDUCT_TEST_ID':
            return {
                ...state ,
                id:action.payload
            }
        case 'SET_TEST_REGISTER_LINK':
            return {
                ...state ,
                testRegisterLink:action.payload
            }
        case 'UPDATE_TEST_BASIC_DETAILS':
            return{
                ...state,
                basictestdetails:action.payload
            }
        case 'CHANGE_TEST_ISREGISTRATION_AVAILABLE':
            return{
                ...state,
                basictestdetails:{
                    ...state.basictestdetails,
                    isRegistrationavailable:action.payload
                }
            }
        default:
            return state;
    }
}