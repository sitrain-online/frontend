import React from 'react';
import './homepage.css'; 
import './homepage.jpeg';

import Login from '../login/login';
import Header from '../header/header'; 

function Homepage(props) {
  return (
    <div>
        <div className="parallax">
          <Header/>
          <Login />
        </div>
    </div>
  );
}

export default Homepage;
