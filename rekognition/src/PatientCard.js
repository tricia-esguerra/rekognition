import React, { Component, Fragment } from 'react';
import {Calendar, Doctor, Location} from './Icons';
import './PatientCard.css';


export default class PatientCard extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', img: ''};
  }

  componentDidMount() {
    const socket = new WebSocket("wss://olf304f410.execute-api.us-west-2.amazonaws.com/Prod");
    socket.onmessage = item => {
      console.log('New Socket Message', item.data)
      var dt = JSON.parse(item.data);
      console.log(dt);
      this.setState({name: dt.name});
      this.setState({img: dt.imageUrl});
    };
  }

  renderDetails(){
    if(this.state.name) {
      return(
        <Fragment>
          <div className="appointment">
            <div className="grid-left">
            <img src={this.state.img} className="patient-image" alt="logo" />
            <div className="patient-name">{this.state.name}</div>
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
        </Fragment>
      );
    }
    else {
      return(<h3>No patient to display</h3>);
    }
  }


  render() {
    console.log(this.state);
    return(
      <Fragment>
        <div className="patient-card">
          {this.renderDetails()}
        </div>
      </Fragment>
    );
  }
}