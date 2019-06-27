<<<<<<< HEAD
const conf = require("./conf");
const axios = require('axios');

class LocalAuth{
=======
import apis from "./Apis";
import { Get, Post} from './axiosCall';


class AuthService{
    constructor(){
        this.token=null;
    }
    
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
    retriveToken = ()=>{
        return localStorage.getItem('Token')
    }

    storeToken = (t)=>{
<<<<<<< HEAD
        localStorage.setItem('Token', t)
=======
        localStorage.setItem('Token', t);
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
    }

    deleteToken = ()=>{
        localStorage.removeItem('Token');
    }

<<<<<<< HEAD


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
=======
    LoginAuth = (u,p)=>{
        return Post({
            url:apis.LOGIN,
            data:{
                emailid : u,
                password : p
            }
        })    
    }

    FetchAuth = (t)=>{
        return Get({
            url : apis.GETDETAILSUSER,
            params : {
                Token : t
            }
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
        })
    }


}

<<<<<<< HEAD
export default new LocalAuth();
=======
export default new AuthService();
>>>>>>> d380126120fc464c4f008663a5165d9c306be815
