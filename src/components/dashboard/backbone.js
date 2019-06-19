import React from 'react';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';
import './backbone.css';
import { showDrawer } from '../../actions/sideBarAction';


import Container from './content/container';

class Dashboard extends React.Component{

    Open(){
        this.props.showDrawer()
    }

    render(){
        return (
            <div>
                <button onClick={()=>{this.Open()}}>click me</button>
                {this.props.drawerOpenState}
                <Container/>
            </div>
        );
    }
  
}


const mapStateToProps = state => ({
    drawerOpenState : state.openDrawer.drawerOpenState
});

export default connect(mapStateToProps,{
    showDrawer
})(Dashboard);
