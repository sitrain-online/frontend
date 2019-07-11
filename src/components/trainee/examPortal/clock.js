import React, { Component } from 'react'
import { connect } from 'react-redux';
import './portal.css';

class Clock extends Component {
    render() {
        return (
            <div>
                hello from clock
            </div>
        )
    }
}


const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Clock);