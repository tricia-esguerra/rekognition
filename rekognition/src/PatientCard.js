import React, { Component, Fragment } from 'react';
import boris from './media/images/boris.png';
import {Calendar, Doctor, Location} from './Icons';
// import Calendar from './Icons/Calendar.svg';
import './PatientCard.css';


export default class PatientCard extends Component {
  render() {
    return(
      <Fragment>
        <div className="patient-card">
          <div className="appointment">
            <div className="grid-left">
            <img src={boris} className="patient-image" alt="logo" />
            <div className="patient-name">Boris Reale</div>
            <div className="patient-detail">MRN: 12345678</div>
            <div className="patient-detail">DOB: 05/01/1991</div>

            </div>
            <div className="grid-right">
              <h3 className="appointment-title">Treatment appointment</h3>
              <div className="appointment-detail"><Calendar className="icon"/> Today, 3:00pm (30mins)</div>
              <div className="appointment-detail"><Location className="icon"/> Room Lakeside</div>
              <div className="appointment-detail"><Doctor className="icon"/> Dr Steven Johns</div>
            </div>
          </div>
          <div className="button-group">
            <button className="green-btn">Queue patient</button>
            <button>Wrong patient</button>
          </div>
        </div>
      </Fragment>
    );
  }
}