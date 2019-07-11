import React, { Component } from 'react'
import { connect } from 'react-redux';
import './portal.css';

class Operations extends Component {
    render() {
        return (
            <div>
                operations here
            </div>
        )
    }
}


const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Operations);