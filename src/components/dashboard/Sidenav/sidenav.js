import React from 'react';
import { connect } from 'react-redux';
import './sidenav.css';
import { Menu, Icon } from 'antd';
import { changeActiveRoute } from '../../../actions/useraction'

class Sidenav extends React.Component {
    constructor(props){
        super(props);
    }
    
    navigateTo = (link) => {
        window.location.href=link;
    }

    componentWillMount(){
        this.color();
    }


    color = ()=>{
        setTimeout(()=>{
            var subUrl = this.props.user.activeurl;
            var obj = this.props.user.userOptions.find((o,i)=>{
                if(o.link ===`/user/${subUrl}`){
                    return o
                }
            });
            this.props.changeActiveRoute(String(this.props.user.userOptions.indexOf(obj)));
        },3000)
    }

    

    render() {
        return (
            <div className={this.props.drawer.navigationCollapsed ? "navigation-wrapper-2" : "navigation-wrapper-1"}>
                {
                    this.props.user.isLoggedIn ? 
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
                        : 
                    null
                }
                                
            </div>
        )
    }
}




const mapStateToProps = state => ({
    drawer : state.drawer,
    user : state.user
});

export default connect(mapStateToProps,{
    changeActiveRoute
})(Sidenav);