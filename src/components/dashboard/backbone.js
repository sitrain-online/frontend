import React from 'react';
import './backbone.css';
import { connect } from 'react-redux';
import UserHeader from './Header/header';
import Sidenav from './Sidenav/sidenav';
import Usercontainer from './container/container';
import AllTrainer from '../admin/allTrainer/alltrainer';
import AllTopics from '../admin/allTopics/alltopics.js';
import AllQuestions from '../trainer/allquestions/allquestion';
import AllTests from '../trainer/alltests/alltest';
import auth from '../../services/AuthServices';
import { login, logout } from '../../actions/loginAction';
import { changeActiveRoute } from '../../actions/useraction';
import Alert from '../common/alert';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            LocalIsLoggedIn : this.props.user.isLoggedIn
        }
    }

    componentWillMount(){
        console.log(this.state.LocalIsLoggedIn);
        var t = auth.retriveToken();
        if(this.state.LocalIsLoggedIn){
            
        }
        else if(t && t!=='undefined'){
            auth.FetchAuth(t).then((response)=>{
                console.log(response.data);
                this.props.login(response.data.user);
                this.setState({
                    LocalIsLoggedIn : true
                })
                var subUrl = this.props.match.params.options;
                var obj = this.props.user.userOptions.find((o,i)=>{
                    if(o.link ===`/user/${subUrl}`){
                        return o
                    }
                });
                this.props.changeActiveRoute(String(this.props.user.userOptions.indexOf(obj)));
            }).catch((error)=>{
                if(error.response.status===401){
                    auth.deleteToken();
                    window.location='/';
                }
                else{
                    Alert('warning','Warning!','Server Error.')
                }
            })
        }
        else{
            window.location='/';
        }
        
    }

    render(){
        var torender = null;
        if(this.props.match.params.options==='listtrainers'){
            torender = <AllTrainer/>
        }
        else if(this.props.match.params.options==='listsubjects'){
            torender = <AllTopics/>
        }
        else if(this.props.match.params.options==='listquestions'){
            torender = <AllQuestions/>
        }
        else if(this.props.match.params.options==='listtests'){
            torender = <AllTests/>
        }
        else{
            torender=<AllTests />
        }

        
        return (
            <div>         
                <UserHeader />      
                <Sidenav/>
                <Usercontainer>
                    { torender }
                </Usercontainer>
            </div> 
        );
    }
   
}

const mapStateToProps = state => ({
    user : state.user
});




export default connect(mapStateToProps,{
    changeActiveRoute,
    login, 
    logout
})(Dashboard);
