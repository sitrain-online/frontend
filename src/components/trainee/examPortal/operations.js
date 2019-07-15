import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge, Icon,Button,Row,Col  } from 'antd';
import './portal.css';
import {ChangeQuestion} from '../../../actions/traineeAction';

class Operations extends Component {
    render() {
        return (
            <div className="question-list-wrapper">
                <div className="question-list-inner">
                    <Row style={{padding:'5px'}}>
                        {this.props.trainee.answers.map((d,i)=>{
                            return(
                                <Col key={i} span={6} style={{padding:'10px'}}>
                                    <Mark qid={d.questionid}  type={d.mark} no={i+1}/>
                                </Col>
                            )
                        })}
                    </Row>
                    
                </div>
            </div>
        )
    }
}























function mark(props){
    if(props.type==='answered'){
        return(
            <Button onClick={()=>props.ChangeQuestion(props.qid)} className="qb" style={{background:'#0B6623'}} type="primary">{props.no}</Button>
        )
    }
    else if(props.type==='answered-marked'){
        return(
            <Badge className="qb" count={<Icon type="flag"  theme="filled" style={{ color: '#f5222d' }} />}>
                <Button onClick={()=>props.ChangeQuestion(props.qid)} style={{background:'#0B6623',color:'#fff'}}>{props.no}</Button>
            </Badge>  
        )
    }
    else if(props.type==='not-answered-marked'){
        return(
            <Badge className="qb"  count={<Icon type="flag"  theme="filled" style={{ color: '#f5222d' }} />}>
                <Button onClick={()=>props.ChangeQuestion(props.qid)}  style={{background:'#999999',color:'#fff'}}>{props.no}</Button>
            </Badge>  
        )
    }
    else{
        return(
            <Button onClick={()=>props.ChangeQuestion(props.qid)} className="qb" style={{background:'#999999',color:'#fff'}}>{props.no}</Button>
        )
    }
    
}







const mapStateToProps = state => ({
    trainee : state.trainee
});



let Mark=connect(mapStateToProps,{
    ChangeQuestion
})(mark);

export default connect(mapStateToProps,null)(Operations);