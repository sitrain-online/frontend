import React from 'react'
import { connect } from 'react-redux';
import { Tabs,Button } from 'antd';
import { changeStep,changeBasicNewTestDetails } from '../../../actions/testAction';
import GeneraterandomQuestion from'./generaterandomquestion';
import './newtest.css';
const { TabPane } = Tabs;



function SelectQuestion(props){
    const questionCount = <Button>Question Selected : {props.test.newtestFormData.testQuestions.length}</Button>;
    return (
        <div>
            <Tabs defaultActiveKey="1" tabBarExtraContent={questionCount}>
                <TabPane tab="Questions-Random" key="1">
                    <GeneraterandomQuestion mode="random"/>
                </TabPane>
                <TabPane tab="Questions-Difficulty" key="2">
                    Coming soon!
                </TabPane>
                <TabPane tab="Questions-Manually" key="3">
                    <GeneraterandomQuestion mode="manual" />
                </TabPane>
            </Tabs>
            <Button type="primary" onClick={()=>props.changeStep(2)}>
                Next
            </Button>
        </div>
    )  
}


const mapStateToProps = state => ({
    test : state.test
});

export default connect(mapStateToProps,{
    changeStep,
    changeBasicNewTestDetails
})(SelectQuestion);