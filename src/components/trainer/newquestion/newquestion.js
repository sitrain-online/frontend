import React, { Component } from 'react'
import './newquestion.css';
import {
    Form,
    Input,
    Button,
    Select,
    Row,
    Col,
    Switch ,
    Icon,
    Upload,
    Checkbox,
    Modal
} from 'antd';
import { connect } from 'react-redux';
import { 
    ChangeQuestionConfirmDirty,
    ChangeQuestionFormData,
    AddFifthOptionInQuestion
} from '../../../actions/trainerAction';



class NewQuestion extends Component {

    addfifthOption = (e)=>{
        this.props.AddFifthOptionInQuestion();
    }

    Customalert = ()=>{
        Modal.confirm({
            title: 'Confirm',
            content: 'empty option can not be set as answer',
            okText: 'I understand',
            cancelText: null,
        });
    }
    
    SubjectonChange = (value) => {
        console.log(`selected ${value}`);
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            subject : value
        })
    }


    QuestionChange = (e)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            questionbody : e.target.value
        })
    }

    OptionTextChange =(e,i)=>{
        var newOptions = [...this.props.trainer.QuestionFormData.options]
        newOptions[i]={
            ...this.props.trainer.QuestionFormData.options[i],
            body : e.target.value
        }
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            options : newOptions
        })
    }

    AnswerOptionSwitch = (e,i)=>{
        if((this.props.trainer.QuestionFormData.options[i].body!='' && this.props.trainer.QuestionFormData.options[i].body!=null)
            || this.props.trainer.QuestionFormData.options[i].image!=null
        ){
            var newOptions = [...this.props.trainer.QuestionFormData.options]
            newOptions[i]={
                ...this.props.trainer.QuestionFormData.options[i],
                isAnswer : e.target.checked
            }
            this.props.ChangeQuestionFormData({
                ...this.props.trainer.QuestionFormData,
                options : newOptions
            })
            
        }
        else{   
            this.Customalert()
            return;
        }
        
    }

    QuestionImageonChange = (event)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            questionimage : event.target.files[0]
        })
    }

    OptionImageonChange = (e,i)=>{
        var newOptions = [...this.props.trainer.QuestionFormData.options]
        newOptions[i]={
            ...this.props.trainer.QuestionFormData.options[i],
            image : e.target.files[0]
        }
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            options : newOptions
        })
    }


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
        const { Option } = Select;
        const { TextArea } = Input;
        
        return (
            <div className="register-subject-form" >
                {this.props.trainer.QuestionId}
                <div className="register-trainer-form-body">
                    <Form  onSubmit={this.handleSubmit}>
                        <div>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Subject" hasFeedback>
                                        {getFieldDecorator('subject', {
                                            initialValue :this.props.trainer.QuestionFormData.subject,
                                            rules: [{ required: true, message: 'Please select any subject!' }],
                                        })(
                                            <Select
                                                showSearch
                                                style={{ width:'100%'}}
                                                placeholder="Select a subject"
                                                optionFilterProp="children"
                                                onChange={this.SubjectonChange}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                {
                                                    this.props.trainer.subjects.map((d,i)=><Option key={i} value={d}>{d}</Option>)
                                                }
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={18}>
                                    <Form.Item label="Question" hasFeedback>
                                        {getFieldDecorator('questionbody', {
                                            initialValue :this.props.trainer.QuestionFormData.questionbody,
                                            rules: [{ required: true, message: 'Please type question!' }],
                                        })(
                                            <TextArea onChange={this.QuestionChange} rows={5} />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col span={6} style={{padding : '0px 20px'}}>
                                    <Form.Item label="Question Image">
                                        <input type="file" className="fileUpload-input" accept="image/*" onChange={this.QuestionImageonChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div style={{paddingTop:'20px'}}>
                                {
                                    this.props.trainer.QuestionFormData.options.map((option,i)=>{
                                        var flag=i%2
                                        return(
                                            <Row key={i} className="">
                                                <Col offset={1} span={13}>
                                                    <Form.Item label={`option${i+1}`} hasFeedback>
                                                        {getFieldDecorator(`option${i+1}`, {
                                                            initialValue :this.props.trainer.QuestionFormData.options[i].body,
                                                        })(
                                                            <TextArea onChange={ (e)=>this.OptionTextChange(e,i)} rows={3} />
                                                        )}
                                                    </Form.Item>
                                                </Col>
                                                <Col offset={2} span={6} style={{textAlign:'center'}}>
                                                    <Form.Item label={`Option${i+1} Image`}>
                                                        <input type="file" className="fileUpload-input" accept="image/*" onChange={(e)=>this.OptionImageonChange(e,i)} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={2} style={{padding : '55px 10px'}}>
                                                    <Form.Item>
                                                        <Checkbox checked={this.props.trainer.QuestionFormData.options[i].isAnswer} onChange={(e)=>this.AnswerOptionSwitch(e,i)} ></Checkbox>
                                                    </Form.Item>
                                                </Col>
                                            </Row>                                                
                                        )
                                    })
                                }
                            </div>
                            <Row>
                                <Col span={12}>
                                    { this.props.trainer.fifthoptioAddButtonVisible ? <Button type="primary" onClick={(e)=>this.addfifthOption(e)}>Add 5th option</Button> : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={20}  span={4}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block>
                                            {this.props.trainer.Questionmode}
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                            
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainer : state.trainer
});



const NewQuestionForm = Form.create({ name: 'newQuestion' })(NewQuestion);

export default connect(mapStateToProps,{
    ChangeQuestionConfirmDirty,
    ChangeQuestionFormData,
    AddFifthOptionInQuestion
})(NewQuestionForm);

