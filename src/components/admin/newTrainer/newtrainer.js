import React, { Component } from 'react'
import './newtrainer.css';
import {
    Form,
    Input,
    Button,
    Typography,
    Row, Col
} from 'antd';
import { connect } from 'react-redux';
import { 
    ChangeTrainerConfirmDirty,
} from '../../../actions/adminAction';

class NewTrainer extends Component {

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('passwords are not same !');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.props.admin.TrainerconfirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { Title } = Typography;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register-trainer-form" >
                {this.props.admin.trainerId}
                <div className="register-trainer-form-body">
                    <Form  onSubmit={this.handleSubmit}>
                        <Row type="flex">
                            <Col span={12}>
                                <Form.Item label="Name" hasFeedback className="input-admin-trainer">
                                    {getFieldDecorator('nickname', {
                                        rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="E-mail" hasFeedback className="input-admin-trainer">
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row type="flex">
                            <Col span={12}>
                                <Form.Item label="Password" hasFeedback className="input-admin-trainer">
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password />)}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Confirm Password" hasFeedback className="input-admin-trainer">
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                        ],
                                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                {this.props.admin.Trainermode}
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



const NewTrainerForm = Form.create({ name: 'register' })(NewTrainer);

export default connect(mapStateToProps,{
    ChangeTrainerConfirmDirty,
})(NewTrainerForm);

