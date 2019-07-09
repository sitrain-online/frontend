import React, { Component } from 'react';
import { Button, Form,InputNumber,Transfer,Row,Col } from 'antd';
import { connect } from 'react-redux';
import { changeStep,changeMode,removeQuestionFromMainQueue,changeBasicNewTestDetails,fetchSubjectWiseQuestion,pushQuestionToQueue } from '../../../actions/testAction';
import './newtest.css';
import Alert from '../../common/alert';

class GeneraterandomQuestionO extends Component {
    constructor(props){
        super(props);
        this.state={
            generating:false,
            autogenerate:true
        }
        this.props.changeMode(this.props.mode);
    }

    componentDidMount(){
        this.props.fetchSubjectWiseQuestion(this.props.test.newtestFormData.testSubject);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                if(values.no<=this.props.test.questionsAvailablebasedonSubject.length){
                    var qus=[];
                    var allquestions=[...this.props.test.questionsAvailablebasedonSubject];
                    var l=allquestions.length-1;
                    for(var i=values.no;i>0;i--){
                        l=l-1;
                        var r = Math.floor(Math.random() * l);
                        qus.push(allquestions[r]._id);
                        allquestions.splice(r,1);
                    }
                    this.props.pushQuestionToQueue(qus);
                    this.setState({
                        autogenerate : false
                    })
                }
                else{
                    Alert('error','Error!',"You don't have enough questions to select." );
                } 
            }
        });
    };

    renderItem = item => {
        const customLabel = (
          <span className="custom-item">
            {item.body}
          </span>
        )
        return {
            label: customLabel, 
            value: item._id, 
        }
    }

    handleChange = (targetKeys, direction, moveKeys) => {
        this.props.pushQuestionToQueue(targetKeys);
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row>
                    <Col span={4} style={{padding:'20px 0px'}}>
                        <div className={`random-question-generation ${this.props.mode ==="random"? "notblind" : "blind"}`}>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Item label="Enter No of questions" hasFeedback>
                                    {getFieldDecorator('no', {
                                        rules: [{ required: true, message: 'Please enter no of question' }],
                                    })(
                                        <InputNumber style={{width:'100%'}}  placeholder="No of question" min={10} max={50}/>
                                    )}
                                </Form.Item> 
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block disabled={!this.state.autogenerate}>
                                        Generate Test Paper
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col span={20} style={{padding:'20px'}}>
                        <Transfer
                            disabled={this.props.mode ==="random"? true : false}
                            rowKey={record => record._id}
                            dataSource={this.props.test.questionsAvailablebasedonSubject}
                            listStyle={{
                                width: '45%',
                                height: 500,
                                background:'linear-gradient(to right,rgb(80,190,189),rgb(0,153,153),rgb(0,153,203))'
                            }}
                            targetKeys={this.props.test.newtestFormData.testQuestions}
                            render={this.renderItem}
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>
                
            </div>
        )
    }
}

const GeneraterandomQuestion = Form.create({ name: 'Basic Form' })(GeneraterandomQuestionO);

const mapStateToProps = state => ({
    test : state.test
});

export default connect(mapStateToProps,{
    changeStep,
    changeBasicNewTestDetails,
    fetchSubjectWiseQuestion,
    pushQuestionToQueue,
    removeQuestionFromMainQueue,
    changeMode
})(GeneraterandomQuestion);


