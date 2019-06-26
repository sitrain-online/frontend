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

import { changeActiveRoute } from '../../actions/useraction';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log('login');
        this.props.wakeUp();
    }

    componentWillMount(){
        console.log(this.props.user.userOptions);
        var subUrl = this.props.match.params.options;
        var obj = this.props.user.userOptions.find((o,i)=>{
            if(o.link ===`/user/${subUrl}`){
                return o
            }
        });
        this.props.changeActiveRoute(String(this.props.user.userOptions.indexOf(obj)))
    }


    render(){
        var torender = null;
        if(this.props.match.params.options==='listtrainers'){
            torender = <AllTrainer/>
        }
        if(this.props.match.params.options==='listsubjects'){
            torender = <AllTopics/>
        }
        if(this.props.match.params.options==='listquestions'){
            torender = <AllQuestions/>
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
    wakeUp
})(Dashboard);
