import React from 'react';
import { connect } from 'react-redux';
import './portal.css';
import user_icon from './user.png'

function Trainee() {
    return (
        <div className="loggedin-trainee-container">
            <div className="loggedin-trainee-inner">
                <img src={user_icon} className="loggedin-trainee-logo"/>
                <div className="loggedin-trainee-details-container">
                    <p>Kiran kumar das</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Trainee);