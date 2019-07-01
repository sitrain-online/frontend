import React, { Component } from 'react'
import './newquestion.css';
import {
    Form,
    Input,
    Button,
    Select,
    Row,
    Col,
    Checkbox,
    Modal
} from 'antd';
import { connect } from 'react-redux';
import { 
    ChangeQuestionConfirmDirty,
    ChangeQuestionFormData,
    AddFifthOptionInQuestion
} from '../../../actions/trainerAction';
import { SecurePost, SecureGet } from '../../../services/AuthServices';
import apis from '../../../services/Apis';
import Alert from '../../../components/common/alert';



class NewQuestion extends Component {
    constructor(props){
        super(props);
        this.state={
            questionDetails:{
                subject : null,
                questionbody : null,
                questionimage:null,
                options :[
                    {
                        image :null,
                        body : null,
                        isAnswer :false
                    },
                    {
                        image :null,
                        body : null,
                        isAnswer :false
                    },
                    {
                        image :null,
                        body : null,
                        isAnswer :false
                    },
                    {
                        image :null,
                        body : null,
                        isAnswer :false
                    }
                ]      
            }
        }
    }

    addfifthOption = (e)=>{
        this.props.AddFifthOptionInQuestion()
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
        if((newOptions[i].image==='undefined' || newOptions[i].image===undefined || newOptions[i].image===null || newOptions[i].image==='null') && 
            (newOptions[i].body==='undefined' || newOptions[i].body===undefined || newOptions[i].body==='null' || newOptions[i].body==='' || newOptions[i].body===null)){
                newOptions[i]={
                    ...this.props.trainer.QuestionFormData.options[i],
                    isAnswer : false
                }
                this.props.ChangeQuestionFormData({
                ...this.props.trainer.QuestionFormData,
                options : newOptions
            })
        }     
    }

    AnswerOptionSwitch = (e,i)=>{
        if((this.props.trainer.QuestionFormData.options[i].body!=='' && this.props.trainer.QuestionFormData.options[i].body!==null)
            || (this.props.trainer.QuestionFormData.options[i].image!==null && this.props.trainer.QuestionFormData.options[i].image!=='undefined' && this.props.trainer.QuestionFormData.options[i].image!==undefined)
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
        if((newOptions[i].image==='undefined' || newOptions[i].image===undefined || newOptions[i].image===null || newOptions[i].image==='null') && 
            (newOptions[i].body==='undefined' || newOptions[i].body===undefined || newOptions[i].body==='null' || newOptions[i].body==='' || newOptions[i].body===null)){
                newOptions[i]={
                    ...this.props.trainer.QuestionFormData.options[i],
                    isAnswer : false
                }
                this.props.ChangeQuestionFormData({
                ...this.props.trainer.QuestionFormData,
                options : newOptions
            })
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var f=1;
                var ans=0;
                console.log('Received values of form: ', values);
                this.props.trainer.QuestionFormData.options.forEach((element,i) => {
                    if((element.image==='undefined' || element.image===undefined || element.image===null || element.image==='null')&&(element.body==='' ||element.body===null || element.body==='null' || element.body==='undefined' || element.body===undefined )){
                        f=0;
                    }
                    if(element.isAnswer){
                        ans=ans+1
                    }
                })
                if(f){
                    if(!ans){
                        Alert('warning','Warning!','There must be atleast one right answer');
                    }
                }
                else{
                    Alert('warning','Warning!','Please fill all the options');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        const { TextArea } = Input;
        
        return (
            <div className="register-subject-form" >
                <div className="register-trainer-form-body">
                    <Form  onSubmit={this.handleSubmit}>
                        <div>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Subject" hasFeedback>
                                        {getFieldDecorator('subject', {
                                            rules: [{ required: true, message: 'Please select any subject!' }],
                                        })(
                                            <Select
                                                showSearch
                                                style={{ width:'100%'}}
                                                placeholder="Select a subject"
                                                onChange={this.SubjectonChange}
                                                optionFilterProp="s"
                                            >
                                                {
                                                    this.props.admin.subjectTableData.map((d,i)=><Option key={d._id} s={d.topic} value={d._id}>{d.topic}</Option>)
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
                                            Create Question
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
    trainer : state.trainer,
    admin : state.admin
});



const NewQuestionForm = Form.create({ name: 'newQuestion' })(NewQuestion);

export default connect(mapStateToProps,{
    ChangeQuestionConfirmDirty,
    ChangeQuestionFormData,
    AddFifthOptionInQuestion
})(NewQuestionForm);

