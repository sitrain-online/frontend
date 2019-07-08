import React from 'react'
import { connect } from 'react-redux';
import { Tabs,Button } from 'antd';
import { changeStep,changeBasicNewTestDetails } from '../../../actions/testAction';
import './newtest.css';
const { TabPane } = Tabs;



function SelectQuestion(props){
    const questionCount = <Button>Question Selected : {props.test.newtestFormData.testQuestions.length}</Button>;
    return (
        <div>
            <Tabs defaultActiveKey="1" tabBarExtraContent={questionCount}>
                <TabPane tab="Random Questions" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Select Questions based on difficulty" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Select Question Manually" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
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