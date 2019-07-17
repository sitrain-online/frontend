const initialState = {
    proceedingToTest:false,
    invalidUrl:false,
    testid:null,
    traineeid:null,
    initialloading1:true,
    initialloading2:true,
    testbegins : true,
    startedWriting:true,
    testconducted:false,
    LocaltestDone:true,
    m_left:0,
    s_left:0,
    traineeDetails:{
        name:"",
        emailid:"",
        contact:""
    },
    questions:[
        {

        },
        {

        },
        {

        },
        {

        }
    ],
    answers:[
        {
            questionid:'1',
            answers :[],
            mark:'answered-marked'
        },
        {
            questionid:'2',
            answers :[],
            mark:'answered'
        },
        {
            questionid:'3',
            answers :[],
            mark:'not-answered'
        },
        {
            questionid:'4',
            answers :[],
            mark:'answered-marked'
        },
        {
            questionid:'5',
            answers :[],
            mark:'not-answered'
        },
        {
            questionid:'6',
            answers :[],
            mark:'answered'
        },
        {
            questionid:'7',
            answers :[],
            mark:'not-answered'
        },
        {
            questionid:'8',
            answers :[],
            mark:'not-answered-marked'
        }
        ,
        {
            questionid:'9',
            answers :[],
            mark:'answered-marked'
        },
        {
            questionid:'10',
            answers :[],
            mark:'not-answered-marked'
        }
    ]
}


export default (state = initialState, action )=>{
    switch(action.type){
        case 'SET_TRAINEE_TEST_DETAILS':
            return{
                ...state,
                testid:action.payload1,
                traineeid:action.payload2,
            }
        case 'FETCH_TEST_FLAG':
            return{
                ...state,
                testbegins:action.payload1,
                startedWriting:action.payload2,
                testconducted:action.payload3,
                LocaltestDone:action.payload4,
                m_left:action.payload5,
                s_left:action.payload6,
                initialloading1:false
            }
        case 'INVALID_TEST_URL':
            return{
                ...state,
                invalidUrl:true
            }
        case 'TEST_DONE_LOCAL':
            return {
                ...state,
                LocaltestDone : true
            }
        case 'PROCEEDING_TO_TEST':
            return{
                ...state,
                proceedingToTest:action.payload
            }
        case 'SWITCH_QUESTION':
            return {
                ...state,
            }
        case 'FETCH_LOGGED_IN_TRAINEE':
            return{
                ...state,
                initialloading2:false,
                traineeDetails:action.payload
            }
        default:
            return state;
    }
}