import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, InputNumber , Input, Button,Select  } from 'antd';
import { changeStep,changeBasicNewTestDetails } from '../../../actions/testAction';
import './newtest.css';
const { Option } = Select;


class BasicTestFormO extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log(values)
            this.props.changeBasicNewTestDetails({
                testType:values.type,
                testTitle: values.title,
                testDuration : values.duration,
                OrganisationName:values.organisation,
                testSubject:values.subjects
            })
            this.props.changeStep(1);
          }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="basic-test-form-outer">
                <div className="basic-test-form-inner">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="Test Type"  hasFeedback>
                            {getFieldDecorator('type', {
                                initialValue : this.props.test.newtestFormData.testType,
                                rules: [{ required: true, message: 'Please select a test type' }],
                            })(
                                <Select 
                                placeholder="Test Type"
                                >
                                    <Option value="pre-test">Pre Test</Option>
                                    <Option value="post-test">Post Test</Option>   
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Test Title"  hasFeedback>
                            {getFieldDecorator('title', {
                                initialValue : this.props.test.newtestFormData.testTitle,
                                rules: [{ required: true, message: 'Please give the test title' }],
                                
                            })(
                                <Input placeholder="Test Title" />
                            )}
                        </Form.Item>
                        <Form.Item label="Subjects"  hasFeedback>
                            {getFieldDecorator('subjects', {
                                initialValue : this.props.test.newtestFormData.testSubject,
                                rules: [{ required: true, message: 'Please select a test type' }],
                            })(
                                <Select
                                mode="multiple"
                                placeholder="Select one or more subjects"
                                style={{ width: '100%' }}
                                allowClear={true}
                                optionFilterProp="s"
                                >
                                    {this.props.admin.subjectTableData.map(item => (
                                        <Select.Option key={item._id} value={item._id} s={item.topic}>
                                        {item.topic}
                                        </Select.Option>
                                    ))}
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Test Duration (in minutes)" hasFeedback>
                            {getFieldDecorator('duration', {
                                initialValue : this.props.test.newtestFormData.testDuration,
                                rules: [{ required: true, message: 'Please give test duration' }],
                            })(
                                <InputNumber style={{width:'100%'}}  placeholder="Test Duration" min={60} max={180}/>
                            )}
                        </Form.Item> 
                        <Form.Item label="Organisation Name"  hasFeedback>
                            {getFieldDecorator('organisation', {
                                initialValue : this.props.test.newtestFormData.OrganisationName
                            })(
                                <Input placeholder="Organisation Name" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Next
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
const BasicTestForm = Form.create({ name: 'Basic Form' })(BasicTestFormO);

const mapStateToProps = state => ({
    test : state.test,
    admin:state.admin
});

export default connect(mapStateToProps,{
    changeStep,
    changeBasicNewTestDetails
})(BasicTestForm);