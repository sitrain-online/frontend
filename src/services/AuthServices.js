const conf = require("./conf");
const axios = require('axios');

class LocalAuth{
    retriveToken = ()=>{
        return localStorage.getItem('Token')
    }

    storeToken = (t)=>{
        localStorage.setItem('Token', t)
    }

    deleteToken = ()=>{
        localStorage.removeItem('Token');
    }



    LogIn = (userName,password)=>{
        return axios.post(`${conf.base}${conf.LoginApi}`,{
            emailid : userName,
            password : password
        })
    }



    wakeUp = (t)=>{
        return axios({
            method: 'get',
            baseURL : conf.base,
            url: conf.FetchUserDetailsApi,
            params : {
                Token : t
            }          
        })
    }


}

export default new LocalAuth();