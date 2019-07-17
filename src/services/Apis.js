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
    FILE_UPLOAD:'/api/v1/upload',
    CREATE_TEST : '/api/v1/test/create',
    GET_ALL_TESTS:'/api/v1/test/details/all',
    GET_SINGLE_TEST:'/api/v1/test/details',
    REGISTER_TRAINEE_FOR_TEST:'/api/v1/trainee/enter',
    RESEND_TRAINER_REGISTRATION_LINK: '/api/v1/trainee/resend/testlink',
    GET_SINGLE_TEST_DETAILS_BASIC:'/api/v1/test/basic/details',
    STOP_REGISTRATION :'/api/v1/trainer/registration/stop',
    START_TEST_BY_TRAINER:'/api/v1/test/begin',
    GET_TEST_CANDIDATES :'/api/v1/test/candidates',
    GET_TEST_QUESTIONS :'/api/v1/test/questions',
    FETCH_TRAINEE_DETAILS:'/api/v1/trainee/details',
    FETCH_TRAINEE_TEST_DETAILS:'/api/v1/trainee/flags',
    PROCEED_TO_TEST:'/api/v1/trainee/answersheet'
}


export default apis;