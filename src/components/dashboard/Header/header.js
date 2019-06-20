import React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import './header.css';
import { toogleNav } from '../../../actions/sideBarAction';

class Header extends React.Component{ 

    OpenDrawer = () => {
        this.props.toogleNav()
    }

    render(){
        return (
            <div className="header-container">
                <Button type="primary" size="large" onClick={this.OpenDrawer} className="toggle-button">
                    <Icon type="menu" />
                </Button>
            </div>
        );
    }
}

export default connect(null,{
    toogleNav
})(Header);