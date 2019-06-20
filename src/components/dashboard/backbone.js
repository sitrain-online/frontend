import React from 'react';
import './backbone.css';
import Header from './Header/header';
import Sidenav from './Sidenav/sidenav';

export default class Dashboard extends React.Component{

    render(){
        return (
            <div>               
                <Header/>
                <Sidenav/>
            </div>

            
 
        );
    }
}


