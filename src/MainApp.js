import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

import Event from "./pages/Event";

class MainApp extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        events: [
        {
            id: 1,
            time: "10:00",
            title: "Breakfast with Simon",
            location: "Lounge Caffe",
            description: "Discuss Q3 targets"
        },
        {
            id: 2,
            time: "10:30",
            title: "Daily Standup Meeting (recurring)",
            location: "Warsaw Spire Office",
        },
        {   
            id: 3, 
            time: "11:00", 
            title: "Call with HRs"
        },
        {
            id: 4,
            time: "12:00",
            title: "Lunch with Jimothy",
            location: "Canteen", 
        }
    ]
    };
    }

//Without map method
  // myLoopFunction() {
  //   var myArray = [];
  //   var i;
  //   for (i = 0; i < this.state.events.length; i++) {
  //       myArray[i] = (
  //       <Event
  //           time={this.state.events[i].time}
  //           title={this.state.events[i].title}
  //       />
  //       );
  //   }
  //   return myArray;
  // }

    handleDelete = eventId => {
        const events = this.state.events.filter(e => e.id !== eventId);
        this.setState({ events });
    }

    render() {
    return (
        <React.Fragment>
        <MDBContainer>
            <MDBRow>
            <MDBCol md="9" className="mb-r">
                <h2 className="text-uppercase my-3">Today:</h2>
                <div id="schedule-items">
                    {this.state.events.map(event => (
                    <Event
                        key={event.id}
                        id={event.id}
                        time={event.time}
                        title={event.title}
                        location={event.location}
                        description={event.description}
                        onDelete = {this.handleDelete}
                    />
                    ))}
                </div>
            </MDBCol>
                <MDBCol md="3">
                        <h3 className="text-uppercase my-3">Schedule</h3>
                        <h6 className="my-3">It's going to be busy today. You have <b>{this.state.events.length} events </b> today.</h6>
                        <h1 className="my-3">
                            <MDBRow>
                                <MDBCol xs="3" className="text-center">
                                    <MDBIcon icon="sun" fixed />
                                </MDBCol>
                                <MDBCol xs="9">Sunny</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol xs="3" className="text-center">
                                    <MDBIcon icon="thermometer-three-quarters" fixed />
                                </MDBCol>
                                <MDBCol xs="9">23°C</MDBCol>
                            </MDBRow>
                        </h1>
                        <p>
                            Don't forget your sunglasses. Today will be dry sunny, becomming warm in the afternoon with temperatures of between 20 and 25 degrees.
                        </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </React.Fragment>
    )
    }
}

export default MainApp;