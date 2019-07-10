const initialState = {
    NewQuestionmodalOpened : false,
    AllQuestionconfirmDirty: false,
    QuestionsearchText : '',
    QuestionTableLoading : false, 
    QuestionTableData : [],
    selectedSubjects:[],
    QuestionFormData:{},
    fifthoptioAddButtonVisible:true,
    TestTableLoading:false,
    TestTableData:[],
    DataActiveTestDetails : {
        testDetailsId : null,
        testDetails :[],
        testquestions :[
            {
                questionId : '1',
                difficultIndex : 0.56,
                NoOfCorrectAnswered :10 
            },
            {
                questionId : '2',
                difficultIndex : 0.52,
                NoOfCorrectAnswered :10 
            },
            {
                questionId : '3',
                difficultIndex : 0.50,
                NoOfCorrectAnswered :10 
            },
        ]
    }
}


export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_QUESTION_MODAL_STATE':
            return {
                ...state,
                NewQuestionmodalOpened : action.payload1,
                QuestionFormData : action.payload2
            }
        case 'CHANGE_QUESTION_FORM_CONFIRMDIRTY':
            return {
                ...state,
                AllQuestionconfirmDirty : action.payload
            }
        case 'CHANGE_QUESTION_SEARCH_TEXT':
            return {
                ...state,
                QuestionsearchText : action.payload
            }
        case 'CHANGE_QUESTION_TABLE_LOADING_STATUS':
            return {
                ...state,
                QuestionTableLoading : action.payload1,
                QuestionTableData : action.payload2
            }
        case 'ADD_FIFTH_OPTION':
            return {
                ...state,
                QuestionFormData:{
                    ...state.QuestionFormData,
                    options:[
                        ...state.QuestionFormData.options,
                        {
                            image :null,
                            body : null,
                            isAnswer :false
                        }
                    ]
                },
                fifthoptioAddButtonVisible:false
            }
        case 'CHANGE_SELECTED_SUBJECT':
            return {
                ...state,
                selectedSubjects : action.payload
            }
        case 'CHANGE_QUESTION_FORM_DATA':
            return{
                ...state,
                QuestionFormData : action.payload
            }
        case 'CHANGE_TEST_DETAILS_MODAL_STATE':
            return {
                ...state,
                TestDetailsmodalOpened : action.payload1,
                DataActiveTestDetails :{
                    ...state.DataActiveTestDetails,
                    testDetailsId : action.payload2
                }
            }
        case 'CHANGE_TEST_SEARCH_TEXT':
            return {
                ...state,
                TestsearchText : action.payload
            }
        case 'CHANGE_TEST_TABLE_LOADING_STATUS':
            return {
                ...state,
                TestTableLoading : action.payload1,
                TestTableData :action.payload2
            }
        default:
            return state;
    }
}