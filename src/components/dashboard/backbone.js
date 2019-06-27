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
import { wakeUp } from '../../actions/loginAction';

import { changeActiveRoute, changeActiveUrl } from '../../actions/useraction';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log('login');   
        this.props.changeActiveUrl(this.props.match.params.options);     
    }

    componentWillMount(){
        this.props.wakeUp();
    }



    forceReturn = ()=>{
        if(!this.props.user.isLoggedIn){
            window.location.href='/';
        }
    }



    render(){
        let torender = null;
        if(this.props.match.params.options==='listtrainers'){
            torender = <AllTrainer/>;
        }
        if(this.props.match.params.options==='listsubjects'){
            torender = <AllTopics/>;
        }
        if(this.props.match.params.options==='listquestions'){
            torender = <AllQuestions/>;
        }
        if(this.props.match.params.options==='listtests'){
            torender = <AllTests/>
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
    wakeUp,
    changeActiveUrl
})(Dashboard);
