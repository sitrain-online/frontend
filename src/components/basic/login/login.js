import React from "react";
import { Input, Icon, Button } from 'antd';
import './login.css';



export default class Login extends React.Component{

    render(){
        return(
            <div className="login-container">
                <div className="login-inner">
                    <p className="lable">Username</p>
                    <Input
                        placeholder="Enter your username"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'  }} />}
                        style={{marginBottom: '20px'}}
                    />
                    <p className="lable">Password</p>
                    <Input
                        placeholder="Enter your password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        style={{marginBottom: '20px'}}
                    />
                    <Button block style={{background:'rgb(0,70,105)', color:'#fff'}}>
                        Login
                    </Button>
                </div>  
            </div>
        )
    }

}