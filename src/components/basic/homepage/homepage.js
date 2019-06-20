import React from 'react';
import './homepage.css'; 
import './homepage.jpeg';

import Login from '../login/login';
import HomepageHeader from '../header/header'; 

function Homepage(props) {
  return (
    <div>
        <div className="parallax">
          <HomepageHeader/>
          <Login />
        </div>
    </div>
  );
}

export default Homepage;
