import React from 'react';
import './backbone.css';
import UserHeader from './Header/header';
import Sidenav from './Sidenav/sidenav';
import Usercontainer from './container/container';

import NewTrainerForm from "../admin/newTrainer/newtrainer";
import AllTrainer from '../admin/allTrainer/alltrainer';

export default class Dashboard extends React.Component{
    render(){
        return (
            <div>         
                <UserHeader />      
                <Sidenav/>
                <Usercontainer>
                    <AllTrainer />
                </Usercontainer>
            </div> 
        );
    }
}


