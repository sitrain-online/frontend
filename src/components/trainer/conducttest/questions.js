import React, { Component } from 'react'
import {updateQuestiosnTest } from '../../../actions/conductTest';
import { connect } from 'react-redux';
import apis from '../../../services/Apis';
import { SecurePost } from '../../../services/axiosCall';
import Alert from '../../common/alert';
import {Typography,Button,Row,Col  } from 'antd';
import './conducttes.css';


const { Title } = Typography;

class Questions extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false
        }
    }

    componentDidMount(){
        this.refreshquestionList();
    }   

    refreshquestionList = ()=>{
        this.setState({
            loading:true
        })
        SecurePost({
            url:`${apis.GET_TEST_QUESTIONS}`,
            data:{
                id:this.props.conduct.id
            }
        }).then((response)=>{
            console.log(response);
            if(response.data.success){
                this.props.updateQuestiosnTest(response.data.data);
            }
            else{
                Alert('error','Error!',response.data.message)
            }
            this.setState({
                loading:false
            })
        }).catch((error)=>{
            console.log(error);
            Alert('error','Error!','Server Error')
            this.setState({
                loading:false
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.conduct.questionsOfTest.map((d,i)=>{
                        return(
                            <div  key={i}>
                                <Row>
                                    <Col span={1}>
                                        <Button type="primary" shape="circle" size="small">{i+1}</Button>
                                    </Col>
                                    <Col span={d.quesimg?12:22}>
                                        <b>{d.body}</b>
                                    </Col>
                                    <Col span={d.quesimg?10:0}>
                                        bye
                                    </Col>
                                    <Col span={1}>
                                        {d.weightage}
                                    </Col>
                                </Row> 
                            </div> 
                        )
                    })
                }
            </div>
        )
    }
}



const mapStateToProps = state => ({
    conduct : state.conduct
});

export default connect(mapStateToProps,{
    updateQuestiosnTest
})(Questions);