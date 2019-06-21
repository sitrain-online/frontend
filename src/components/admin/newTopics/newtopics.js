import React, { Component } from 'react'
import './newtopic.css';
import {
    Form,
    Input,
    Button
} from 'antd';
import { connect } from 'react-redux';
import { 
    ChangeSubjectConfirmDirty,
} from '../../../actions/adminAction';

class NewTopics extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register-subject-form" >
                {this.props.admin.SubjectId}
                <div className="register-trainer-form-body">
                    <Form  onSubmit={this.handleSubmit}>
                        <Form.Item label="Topic Name" hasFeedback className="input-admin-trainer">
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'Please input topic name!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                {this.props.admin.Subjectmode}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admin : state.admin
});



const NewSubjectForm = Form.create({ name: 'register' })(NewTopics);

export default connect(mapStateToProps,{
    ChangeSubjectConfirmDirty,
})(NewSubjectForm);

