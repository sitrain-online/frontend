const initialState = {
    TrainermodalOpened : false,
    TrainerconfirmDirty: false,
    Trainermode : 'Register',
    trainerId : null,
    TrainersearchText : '',
    trainerTableLoading : false, 
    trainerTableData : [
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
    subjectTableData : [
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
    ] ,
    SubjectmodalOpened : false,
    SubjectconfirmDirty: false,
    Subjectmode : 'Add',
    SubjectId : null,
    SubjectsearchText : '',
    SubjectTableLoading : false,     
}

export default (state = initialState, action )=>{
    switch(action.type){
        case 'CHANGE_TRAINER_MODAL_STATE':
            return {
                ...state,
                TrainermodalOpened : action.payload1,
                trainerId : action.payload2,
                Trainermode : action.payload3
            }
        case 'CHANGE_TRAINER_FORM_CONFIRMDIRTY':
            return {
                ...state,
                TrainerconfirmDirty : action.payload
            }
        case 'CHANGE_TRAINER_SEARCH_TEXT':
                return {
                    ...state,
                    TrainersearchText : action.payload
                }
        case 'CHANGE_TRAINER_TABLE_LOADING_STATUS':
                return {
                    ...state,
                    trainerTableLoading : action.payload
                }
        case 'CHANGE_SUBJECT_MODAL_STATE':
            return {
                ...state,
                SubjectmodalOpened : action.payload1,
                SubjectId : action.payload2,
                Subjectmode : action.payload3
            }
        case 'CHANGE_SUBJECT_FORM_CONFIRMDIRTY':
            return {
                ...state,
                SubjectconfirmDirty : action.payload
            }
        case 'CHANGE_SUBJECT_SEARCH_TEXT':
                return {
                    ...state,
                    SubjectsearchText : action.payload
                }
        case 'CHANGE_SUBJECT_TABLE_LOADING_STATUS':
                return {
                    ...state,
                    SubjectTableLoading : action.payload
                }
        default:
            return state;
    }
}