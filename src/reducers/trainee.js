const initialState = {
    testbegins : true,
    startedWriting:true,
    testconducted:false,
    LocaltestDone:false,
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
        case 'TEST_DONE_LOCAL':
            return {
                ...state,
                LocaltestDone : true
            }
        case 'SWITCH_QUESTION':
            return {
                ...state,
            }
        default:
            return state;
    }
}