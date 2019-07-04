const apis={
    BASE_LOCAL_URL:'http://localhost:3000',
    BASE : "http://localhost:5000",
    LOGIN : "/api/v1/login/",
    GETDETAILSUSER : "/api/v1/user/details",
    GET_ALL_TRAINER :'/api/v1/admin/trainer/details/all',
    GET_SINGLE_TRAINER_DETAILS : '/api/v1/admin/trainer/details',
    CREATE_TRAINER : '/api/v1/admin/trainer/create',
    DELETE_TRAINER : '/api/v1/admin/trainer/remove',
    GET_ALL_SUBJECTS : '/api/v1/subject/details/all',
    GET_SINGLE_SUBJECT_DETAILS : '/api/v1/subject/details',
    CREATE_SUBJECT : '/api/v1/subject/create',
    GET_ALL_QUESTIONS : '/api/v1/questions/details/all',
    DELETE_QUESTION:'/api/v1/questions/delete',
    FETCH_SINGLE_QUESTION:'/api/v1/questions/details',
    CREATE_QUESTIONS :'/api/v1/questions/create',
    FILE_UPLOAD:'/api/v1/upload'
}


export default apis;