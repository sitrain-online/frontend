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
    Modal,
    Upload,
    Icon,
    InputNumber 
} from 'antd';
import { connect } from 'react-redux';
import { 
    ChangeQuestionConfirmDirty,
    ChangeQuestionFormData,
    AddFifthOptionInQuestion,
    ChangeQuestionTableData,
    ChangeQuestionModalState
} from '../../../actions/trainerAction';
import { SecurePost, Get } from '../../../services/axiosCall';
import apis from '../../../services/Apis';
import Alert from '../../../components/common/alert';
import auth from '../../../services/AuthServices';



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
                ] ,
                explanation:null,
                marks:1     
            },
            adding:false,
            submitDisabled:false
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
    Markchange =(e)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            marks : e.target.value
        })   
    }


    QuestionChange = (e)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            questionbody : e.target.value
        })
    }
    ExplanationChange = (e)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            explanation : e.target.value
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

    OptionImageonChange = (f,i)=>{
        var newOptions = [...this.props.trainer.QuestionFormData.options]
        if(!f){
            delete newOptions[i].image
            newOptions[i].image=null
        }
        else{
            newOptions[i]={
                ...this.props.trainer.QuestionFormData.options[i],
                image :`${apis.BASE}/${f.link}`
            }
        }
        this.setState({
            submitDisabled:false
        })
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
                var opts=[]
                console.log('Received values of form: ', values);
                this.props.trainer.QuestionFormData.options.forEach((element,i) => {
                    opts.push({
                        optbody:element.body,
                        optimg:element.image,
                        isAnswer:element.isAnswer
                    });
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
                    else{
                        this.setState({
                            adding:true
                        });
                        SecurePost({
                            url:apis.CREATE_QUESTIONS,
                            data:{
                                body:this.props.trainer.QuestionFormData.questionbody,
                                options:opts,
                                quesimg:this.props.trainer.QuestionFormData.questionimage,
                                subject:this.props.trainer.QuestionFormData.subject,
                                explanation:this.props.trainer.QuestionFormData.explanation,
                                weightage:this.props.trainer.QuestionFormData.marks,
                            }
                        }).then((response)=>{
                            console.log(response);
                            this.setState({
                                adding:false
                            });
                            if(response.data.success){
                                this.props.ChangeQuestionModalState(false);
                                Alert('success','Success',response.data.message);
                                this.props.ChangeQuestionTableData(this.props.trainer.selectedSubjects);
                            }
                            else{
                                this.props.ChangeQuestionModalState(false);
                                return Alert('warning','Warning!',response.data.message);
                            }

                        }).catch((error)=>{
                            console.log(error);
                            this.setState({
                                adding:false
                            });
                            this.props.ChangeQuestionModalState(false);
                            return Alert('error','Error!','Server Error');
                        })
                        
                    }
                }
                else{
                    Alert('warning','Warning!','Please fill all the options');
                }
            }
        });
    };

    changeqImage = (f)=>{
        this.props.ChangeQuestionFormData({
            ...this.props.trainer.QuestionFormData,
            questionimage:(f.link ?`${apis.BASE}/${f.link}`:null)
        })
        this.setState({
            submitDisabled:false
        })
    }

    upl=()=>{
        this.setState({
            submitDisabled:true
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select;
        const { TextArea } = Input;
        var QuestionImageprops={
            name: 'file',
            action: `${apis.BASE}${apis.FILE_UPLOAD}?Token=${auth.retriveToken()}`,
            listType: 'picture',
        }
        
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
                                        <Upload {...QuestionImageprops} beforeUpload={this.upl} onRemove={this.changeqImage} onSuccess={this.changeqImage}>
                                            <Button>
                                                <Icon type="upload" /> Upload
                                            </Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={18}>
                                    <Form.Item label="Explanation" hasFeedback>
                                        {getFieldDecorator('explanation', {
                                            initialValue :this.props.trainer.QuestionFormData.explanation,
                                            rules: [{ required: true, message: 'Please type Explanation for the answers!' }],
                                        })(
                                            <TextArea onChange={this.ExplanationChange} rows={3} />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col offset={2} span={4}>
                                    <Form.Item label="Weightage" hasFeedback>
                                        {getFieldDecorator('waitage', {
                                            initialValue :this.props.trainer.QuestionFormData.marks,
                                            rules: [{ required: true, message: 'Please enter the marks' }],
                                        })(
                                            <InputNumber min={1} max={2}  onChange={this.Markchange}/>
                                        )}
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
                                                    <Upload {...QuestionImageprops} beforeUpload={this.upl} onRemove={(f)=>this.OptionImageonChange(null,i)} onSuccess={(f)=>this.OptionImageonChange(f,i)}>
                                                        <Button>
                                                            <Icon type="upload" /> Upload
                                                        </Button>
                                                    </Upload>
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
                                        <Button type="primary" htmlType="submit" disabled={this.state.submitDisabled} loading={this.state.adding} block>
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
    AddFifthOptionInQuestion,
    ChangeQuestionModalState,
    ChangeQuestionTableData
})(NewQuestionForm);

