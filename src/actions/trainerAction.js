export const ChangeQuestionModalState = (d1,d2,d3)=> dispatch =>{
    if(d2===null){
        dispatch({
            type : 'CHANGE_QUESTION_MODAL_STATE',
            payload1 : d1,
            payload2 : d2,
            payload3 : d3,
            payload4 : {
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
            }
         })
    }
    else{

        dispatch({
            type : 'CHANGE_QUESTION_MODAL_STATE',
            payload1 : d1,
            payload2 : d2,
            payload3 : d3,
            payload4 : {
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
            }
         })
    }
}
export const ChangeQuestionConfirmDirty = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_QUESTION_FORM_CONFIRMDIRTY',
       payload : d
    })
}


export const ChangeQuestionSearchText = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_QUESTION_SEARCH_TEXT',
       payload : d
    })
}

export const ChangeQuestionTableData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_QUESTION_TABLE_LOADING_STATUS',
       payload : d
    })
}

export const ChangeSelectedSubjects = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_SELECTED_SUBJECT',
       payload : d
    })
}

export const ChangeQuestionFormData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_QUESTION_FORM_DATA',
       payload : d
    })
}

export const AddFifthOptionInQuestion = ()=> dispatch =>{
    dispatch({
       type : 'ADD_FIFTH_OPTION'
    })
}





export const ChangeTestDetailsModalState = (d1,d2)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TEST_DETAILS_MODAL_STATE',
       payload1 : d1,
       payload2 : d2
    })
}

export const ChangeTestSearchText = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TEST_SEARCH_TEXT',
       payload : d
    })
}

export const ChangeTestTableData = (d)=> dispatch =>{
    dispatch({
       type : 'CHANGE_TEST_TABLE_LOADING_STATUS',
       payload : d
    })
}

