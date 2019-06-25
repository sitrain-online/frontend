import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import { connect } from 'react-redux';
import './testdetails.css';
import TestDetailsTab1 from './details';
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
                        <TestDetailsTab1 />
                    </TabPane>
                    <TabPane tab={ <span><Icon type="question-circle" />Questions</span> } key="2">
                        Content of Tab Pane 2
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

export default connect(mapStateToProps,null)(TestDetails);
