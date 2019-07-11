import React from 'react';
import { connect } from 'react-redux';
import './portal.css';
import { Divider } from 'antd';
import user_icon from './user.png'

function Trainee() {
    return (
        <div className="loggedin-trainee-container">
            <div className="loggedin-trainee-inner">
                <img src={user_icon} className="loggedin-trainee-logo"/>
                <div className="loggedin-trainee-details-container">
                    <p><b>Name : </b> Kiran kumar das</p>
                    <p><b>Email Id : </b> Kirankumardas@gmail.com</p>
                </div>
                <Divider />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Trainee);