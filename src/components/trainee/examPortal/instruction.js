import React from 'react'
import { connect } from 'react-redux';
import { Button } from 'antd';
import {ProceedtoTest,fetchTestdata} from '../../../actions/traineeAction';
import './portal.css';

function Instruction(props) {
    return (
        <div>
            <div className="instaruction-page-wrapper">
                <div className="instruction-page-inner">
                    <h2>General Instructions:</h2>
                    <h4>1. All questions are compulsory.</h4>
                    <h4>2. The question paper consists of 26 questions divided into three sections-A, B and C. Section A comprises of 6 
                    questions of one mark each, Section B comprises of 13 questions of four marks each and Section C comprises 
                    of 7 questions of six marks each.</h4>
                    <h4>3. All questions in Section A are to be answered in one word, one sentence or as per the exact requirement of 
                    the question.</h4>
                    <h4>4. There is no overall choice. However, internal choice has been provided in 4 questions of four marks each and 
                    2 questions of six mark each. You have to attempt only one of the alternatives in all such questions.</h4>
                    <h4>5. Use of calculators is not permitted.</h4>
                    <div className="proceed-to-test-button">
                        <Button style={{float:'right'}} type="primary" icon="caret-right" onClick={()=>{props.ProceedtoTest(props.trainee.testid,props.trainee.traineeid,()=>{props.fetchTestdata(props.trainee.testid,props.trainee.traineeid)})}}  loading={props.trainee.proceedingToTest}>
                            Proceed To Test
                        </Button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,{
    ProceedtoTest,
    fetchTestdata
})(Instruction);