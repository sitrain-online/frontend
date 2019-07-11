import React, { Component } from 'react'
import { connect } from 'react-redux';
import './portal.css';

class Question extends Component {
    render() {
        return (
            <div className="question-holder">
                    Question
            </div>
        )
    }
}


const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Question);