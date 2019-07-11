import React, { Component } from 'react'
import { connect } from 'react-redux';
import './portal.css';
import Trainee from './user';
import Operations from './operations';
import Clock from './clock'

export default function Sidepanel(props) {
    return (
        <div className="side-panel-in-exam-dashboard">
            <Trainee />
            <Clock/>
            <Operations />
        </div>
    )
}


