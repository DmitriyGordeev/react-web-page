import React, { Component } from 'react';
import './Card.css'

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"card-box"}>
                <p className={"activity-type"}>{ this.props.activity }</p>
                <p className={"event-name"}>{ this.props.eventName }</p>
                <p className={"event-location"}>{ this.props.eventLocation }</p>
                <img src={ this.props.imageSrc }/>
            </div>
        );
    }
}

Card.defaultProps = {
    activity: "Activity Type",
    eventName: "Event Name",
    eventLocation: "Event Location"
};

export default Card;