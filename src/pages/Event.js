import React from "react";

class Event extends React.Component {

    render () {
        const { time, title, location, description } = this.props
        console.log(this.props)
        return (
            <React.Fragment>
                <h3>{time} - {title}</h3>
                <h6>Location: {location}</h6>
                <p>Desc: {description}</p>
            </React.Fragment>
        )
    }
}

export default Event;