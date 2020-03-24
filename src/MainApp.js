import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

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
            location: "Warsaw Spire Office"
        },
        {   
            id: 3, 
            time: "11:00", 
            title: "Call with HRs" },
        {
            id: 4,
            time: "11:00",
            title: "Lunch with Jimothy",
            location: "Canteen", 
        }
    ]
    };
    }

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

    render() {
    console.log(this.state)
    return (
        <React.Fragment>
        <MDBContainer>
            <MDBRow>
            <MDBCol md="9">
                {this.state.events.map(event => (
                <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                />
                ))}
            </MDBCol>
                <MDBCol md="3">
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </React.Fragment>
    )
    }
}

export default MainApp;