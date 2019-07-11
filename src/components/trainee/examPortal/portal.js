import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography,Skeleton  } from 'antd'
import './portal.css';
import Instruction from './instruction';
import TestBoard from './testBoard';
const { Title } = Typography;


class MainPortal extends Component {
    constructor(props){
        super(props);
        this.state={
            initialloading:true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                initialloading:false
            })
        },800)
    }


    render() {
        if(this.state.initialloading){
            return(
                <div className="skeletor-wrapper">
                    <Skeleton active />
                    <Skeleton active />
                </div>  
            )
        }
        else{
            if(this.props.trainee.testconducted){
                return(
                    <div className="Test-portal-not-started-yet-wrapper">
                        <div className="Test-portal-not-started-yet-inner">
                            <Title className="Test-portal-not-started-yet-inner-message" style={{color:'#fff'}} level={4}>The Test is Over!<br/> You are late.</Title>
                        </div>
                    </div>
                )
            }
            else{
                if(!this.props.trainee.testbegins){
                    return(
                        <div className="Test-portal-not-started-yet-wrapper">
                            <div className="Test-portal-not-started-yet-inner">
                                <Title className="Test-portal-not-started-yet-inner-message" style={{color:'#fff'}} level={4}>The test has not started yet. Wait for the trainer's instruction then refresh the page.</Title>
                            </div>
                        </div>
                    )
                }
                else{
                    if(this.props.trainee.startedWriting){
                        return(
                            <div>
                                <TestBoard />
                            </div>
                        )
                    }
                    else{
                        return(
                            <div>
                                <Instruction/>                             
                            </div>
                        )
                    }
                }
            }
        }
        
    }

}


const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,null)(MainPortal);

