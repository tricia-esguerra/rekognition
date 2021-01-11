import React, { Component } from 'react';
// import boris_smile from './media/images/boris_smile.png';
import PatientCard from './PatientCard';
import './Dashboard.css';


class Dashboard extends Component {

  render() {
    return(
      <div className="dashboard">
        {/* <div className="left">
          <h2 className="title-head">Photo taken in clinic</h2>
          <img src={boris_smile} alt="logo" />
        </div> */}
        <div className="right">
          <h2 className="title-head">Matched patient</h2>
          <PatientCard/>
        </div>
      </div>
    );
  }
}

export default Dashboard