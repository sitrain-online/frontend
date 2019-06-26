import React from 'react';
import './homepage.css'; 
import './homepage.jpeg';
import { connect } from 'react-redux';
import Login from '../login/login';
import HomepageHeader from '../header/header'; 
import {wakeUp} from '../../../actions/loginAction';

class Homepage extends React.Component {

  componentWillMount(){
    this.props.wakeUp();
  }

  componentDidUpdate(){
    console.log(this.props.user.userDetails)
    if(this.props.user.isLoggedIn){
      if(this.props.user.userDetails.type==='ADMIN'){
        window.location.href='/user/listtrainers';
      }
      else{
        window.location.href='/user/listquestions';
      }
    }
  }

  render(){
    return (
      <div>
          <div className="parallax">
            <HomepageHeader/>
            <Login />
          </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  user : state.user
});

export default connect(mapStateToProps,{
  wakeUp
})(Homepage);
