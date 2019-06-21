import React from 'react';
import './backbone.css';
import UserHeader from './Header/header';
import Sidenav from './Sidenav/sidenav';
import Usercontainer from './container/container';
import AllTrainer from '../admin/allTrainer/alltrainer';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var torender = null;
        switch(this.props.match.params.options){
            case 'listtrainer':
                torender = <AllTrainer/>
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


