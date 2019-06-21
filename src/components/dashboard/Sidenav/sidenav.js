import React from 'react';
import { connect } from 'react-redux';
import './sidenav.css';
import { Menu, Icon } from 'antd';

class Sidenav extends React.Component {
    
    navigateTo = (link) => {
        window.location.href=link;
    }

    render() {
        return (
            <div className={this.props.drawer.navigationCollapsed ? "navigation-wrapper-2" : "navigation-wrapper-1"}>
                {
                    
                }
                <Menu
                    defaultSelectedKeys={[this.props.user.activeRoute]}
                    defaultOpenKeys={[]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.drawer.navigationCollapsed}
                    >
                    {
                        this.props.user.userOptions.map((d,i)=>{
                            return(
                                <Menu.Item key={i} onClick={()=>{this.navigateTo(d.link)}}>
                                    <Icon type={d.icon} />
                                    <span>{d.display}</span>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    drawer : state.drawer,
    user : state.user
});

export default connect(mapStateToProps,null)(Sidenav);