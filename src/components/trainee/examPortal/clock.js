import React, { Component } from 'react'
import { connect } from 'react-redux';
import {LocaltestDone} from '../../../actions/traineeAction';
import './portal.css';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state={
            localMinutes:this.props.trainee.m_left,
            localSeconds:this.props.trainee.s_left
        }
    }
    componentDidMount(){
        this.clockF(); 
    }


    clockF = ()=>{
        let c = setInterval(()=>{
            console.log('i am done')
            let l = this.state.localMinutes;
            let s = this.state.localSeconds;
            if(l==0 && s==1){
                clearInterval(c);
                this.props.LocaltestDone();
            }
            else{
                if(s==0){
                    s=59;
                    l=l-1;
                }
                else{
                    s=s-1;
                }
                this.setState({
                    localMinutes:l,
                    localSeconds:s
                })
            }
        },1000)
    }


    render() {
        return (
            <div className="clock-wrapper">
                <div className="clock-container">{this.state.localMinutes} : {this.state.localSeconds}</div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    trainee : state.trainee
});




export default connect(mapStateToProps,{
    LocaltestDone
})(Clock);