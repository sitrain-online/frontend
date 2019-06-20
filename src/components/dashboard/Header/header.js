import React from 'react';
import { Button, Icon, Avatar, Badge } from 'antd';
import { connect } from 'react-redux';
import './header.css';
import { toogleNav } from '../../../actions/sideBarAction';
import main from './main.jpg'

class UserHeader extends React.Component{ 

    OpenDrawer = () => {
        this.props.toogleNav()
    }

    render(){
        return (
            <div className="header-container-1">
                <Button type="primary" size="default" onClick={this.OpenDrawer} className="toggle-button">
                    <Icon type="menu" />
                </Button>

                <img src={main} alt="company logo" className="d-logo" />

              
                <ul className="user-options-list">
                    <li>
                        <Badge count={1} className="user-image-container">
                            <Avatar size="default" shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ backgroundColor: '#fff'}}/>
                        </Badge>
                    </li>
                    <li>
                        <Button type="primary" size="default" shape="circle" className="logout-button">
                            <Icon type="logout" />
                        </Button>
                    </li>
                </ul>
                

                
                
            </div>
        );
    }
}

export default connect(null,{
    toogleNav
})(UserHeader);