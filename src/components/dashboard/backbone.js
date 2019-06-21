import React from 'react';
import './backbone.css';
import { connect } from 'react-redux';
import UserHeader from './Header/header';
import Sidenav from './Sidenav/sidenav';
import Usercontainer from './container/container';
import AllTrainer from '../admin/allTrainer/alltrainer';
import AllTopics from '../admin/allTopics/alltopics.js';

import { changeActiveRoute } from '../../actions/useraction';

class Dashboard extends React.Component{

    componentWillMount(){
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
        if(this.props.match.params.options==='listtrainer'){
            torender = <AllTrainer/>
        }
        if(this.props.match.params.options==='listsubjects'){
            torender = <AllTopics/>
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
    changeActiveRoute
})(Dashboard);
