import React from 'react';
import './welcome.css';
import { Row, Col } from 'antd';

import { Steps,Button} from 'antd';

const { Step } = Steps;
const steps = [
    {
      title: 'Welcome Admin',
      content: <AdminAfterLogin />
                
    },
    {
      title: 'All Trainers',
      content: <Alltrainers /> 
    },
    {
      title: 'All Subjects',
      content: <Allsubjects />
    },
  ];

  export default class welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }
  
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }
  
    render() {
      const { current } = this.state;
      return (
        <div>
            <Row>
                <Col span = {4}>
                    <div className="steps-current-instruction">
                        <Steps current={current} direction="vertical">
                            {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>    
                </Col>
                <Col span = {20}>
                    <div className="steps-content">{steps[current].content}</div>
                </Col>
            </Row>
          
          
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      );
    }
  }


  function AdminAfterLogin(){
      return (
          <div>
              <b>Hello Admin!</b>
              <br/>
              For instructions on how to operate this page
              <br/>
              <b> Click "Next" </b>

          </div>
      )
  }
  function Alltrainers(){
      return (
          <div>
              <b> Add Trainer </b> - Click on "Add New" button to add new trainer.
              <br/>
              <b> Edit Trainer's Profile </b> - Click on "Pen-Paper" icon to edit trainers' details.  
              <br/>
              <b>Delete Trainers' Account</b> - Click on "Bin" icon to delete trainer's account.

          </div>
      )
  }
  function Allsubjects(){
      return(
          <div>
              <b> Add Subject </b> - Click on "Add New" button to add new subject.
              <br/>
              <b> Edit Subject's Name </b> - Click on "Pen-Paper" icon to rename subject.
          </div>
      )
  }
   