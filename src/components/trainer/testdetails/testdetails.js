import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import { connect } from 'react-redux';
import './testdetails.css';
import Questions from '../conducttest/questions'
import {updateQuestiosnActiveTest } from '../../../actions/trainerAction';
const { TabPane } = Tabs;


class TestDetails extends Component {

    tabChange = (key)=>{
        console.log(key)
    }

    render() {
        return (
            <div>
                {this.props.trainer.DataActiveTestDetails.testDetailsId}
                <Tabs defaultActiveKey="1" onChange={ (e)=>this.tabChange(e)}>
                    <TabPane tab={ <span><Icon type="home" />Details</span> } key="1">
                        detail
                    </TabPane>
                    <TabPane tab={ <span><Icon type="question-circle" />Questions</span> } key="2">
                        <Questions id={this.props.trainer.DataActiveTestDetails.testDetailsId} questionsOfTest={this.props.trainer.DataActiveTestDetails.testquestions} updateQuestiosnTest={this.props.updateQuestiosnActiveTest}/>
                    </TabPane>
                    <TabPane tab={ <span><Icon type="user" />Trainees</span> } key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab={ <span><Icon type="pie-chart" />Statistics</span> } key="4">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainer : state.trainer
});

export default connect(mapStateToProps,{
    updateQuestiosnActiveTest
})(TestDetails);
