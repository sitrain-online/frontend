import React from 'react'
import { connect } from 'react-redux';
import './portal.css';

function Instruction() {
    return (
        <div>
            <div className="instaruction-page-wrapper">
                <div className="instruction-page-inner">
                    1.hello
                    2.hi
                    3.bye
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(Instruction);