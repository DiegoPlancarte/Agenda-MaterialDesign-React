import React from "react";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class Event extends React.Component {

    render () {
        const { time, title, location, description } = this.props
        return (
            <React.Fragment>
                <div className="media mt-1">
                    <h3 className="h3-responsive font-weight-bold mr-3">
                        {time}
                    </h3>
                    <div className="media-body mb-3 md-lg-3">
                        <MDBBadge 
                            color="danger" 
                            className="ml-2 float-right"
                            onClick={() => this.props.onDelete(this.props.id)}>
                            -
                        </MDBBadge>
                        <h6 className="mt-0 font-weight-bold">{title}</h6>{" "}
                        <hr className="hr-bold my-2" />
                        {location && (
                            <React.Fragment>
                                <p className="font-smaller mb-0">
                                    <MDBIcon icon="location-arrow" /> {location}
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                {description && (<p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">Desc: {description}
                    </p>
                )}
            </React.Fragment>
        )
    }
}

export default Event;