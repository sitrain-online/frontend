const initialState = {
    NewQuestionmodalOpened : false,
    AllQuestionconfirmDirty: false,
    Questionmode : 'New Question',
    QuestionId : null,
    QuestionsearchText : '',
    QuestionTableLoading : false, 
    QuestionTableData : [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '5',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '6',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '7',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '8',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ],
    subjects : ['drives','switches','push buttons'],
    selectedSubjects : [],
    QuestionFormData : {
        subject : null,
        questionbody : null,
        questionimage:null,
        options :[
            {
                image :null,
                body : null,
                isAnswer :false
            },
            {
                image :null,
                body : null,
                isAnswer :false
            },
            {
                image :null,
                body : null,
                isAnswer :false
            },
            {
                image :null,
                body : null,
                isAnswer :false
            }
        ]
    },
    fifthoptioAddButtonVisible :true,
    TestDetailsmodalOpened : false,
    TestsearchText : '',
    TestTableLoading : false, 
    TestTableData : [
        {
            key: '1',
            name: 'Test0',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Test1',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Test1',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Test1',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '5',
            name: 'Test1',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '6',
            name: 'Test1',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '7',
            name: 'Test1',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '8',
            name: 'Test1',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ],
    DataActiveTestDetails : {
        testDetailsId : null,
        testDetails :[
            {
                key : 'Test Date',
                value : '18/09/1997'
            },
            {
                key : 'Test Type',
                value : 'Pre Test'
            },
            {
                key : 'Test Details',
                value : 'SSP'
            },
            {
                key : 'No of trainees',
                value : 30
            },
            {
                key : 'Test duration',
                value : '60m'
            },
            {
                key : 'Trainer',
                value : 'Durgesh mishra'
            },
            {
                key : 'Subjects',
                value : ['Drives','Switches']
            }
        ],
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
                QuestionId : action.payload2,
                Questionmode : action.payload3,
                QuestionFormData : action.payload4
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
                QuestionTableLoading : action.payload
            }
        case 'CHANGE_SELECTED_SUBJECT':
            return {
                ...state,
                selectedSubjects : action.payload
            }
        case 'CHANGE_QUESTION_FORM_DATA':
            return{
                ...state,
                QuestionFormData :action.payload
            }
        
        case 'ADD_FIFTH_OPTION':
            if(state.QuestionFormData.options.length===4){
                return{
                    ...state,
                    QuestionFormData : {
                        ...state.QuestionFormData,
                        options : [
                            ...state.QuestionFormData.options,
                            {
                                image :null,
                                body : null,
                                isAnswer :false
                                 
                            }
                        ]
                    },
                    fifthoptioAddButtonVisible :false
                }
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
                TestTableLoading : action.payload
            }
        default:
            return state;
    }
}