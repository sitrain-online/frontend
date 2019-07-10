import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Button, Typography,Descriptions,Badge, Select, Icon  } from 'antd';
import './conducttes.css';
import { changeConducttestId } from '../../../actions/conductTest';
import TestDetails from './details';
const { Title } = Typography;


class ConductTestS extends Component {
    constructor(props){
        super(props);
        this.props.changeConducttestId(this.props.testid);
        this.state={
            localTestId:null,
            needRedirect:false
        }
    }

    ChangeLocalTestId = (d)=>{
        this.setState({
            localTestId : d.target.value
        })
    }

    ChangetestId = (d)=>{
        this.setState({
            needRedirect:true
        })
    }

    render() {
        if(this.state.needRedirect){
            return window.location.href=`/user/conducttest?testid=${this.state.localTestId}`
        }
        else{
            return (
                <div className="conduct-test-main-wrapper">
                    {!this.props.conduct.id ? 
                    <div>
                        <Title style={{width:'100%',textAlign:'center'}} level={4}>Enter Test Id</Title>
                        <div className="test-conduct-testid-form">
                            <Input placeholder="Enter test id" onChange={this.ChangeLocalTestId} value={this.state.localTestId}/>
                            <Button onClick={this.ChangetestId}  type="primary" style={{marginTop:'30px'}}>Proceed</Button>
                        </div>
                    </div>:
                    <div>
                        <TestDetails/>
                    </div>}
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    trainer : state.trainer,
    conduct : state.conduct
});

export default connect(mapStateToProps,{
    changeConducttestId
})(ConductTestS);