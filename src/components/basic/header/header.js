import React from 'react';
import './header.css'; 
import main from './main.jpg';

function HomepageHeader(props) {
    return (
        <div>
            <div className="header-container-2">
                <img src={main} alt="company logo" className="logo" />
                <ul className="navigation">
                    <li className="p">Home</li>
                    <li className="p">Catalog</li>
                    <li className="p">About Us</li>
                    <li className="p">Mission</li>
                    <li>Team</li>
                </ul>
            </div>
        </div>
    );
}

export default HomepageHeader;