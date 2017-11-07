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
                <h2 className={"event-name"}>{ this.props.eventName }</h2>
            </div>
        );
    }
}

Card.defaultProps = {
    activity: "Activity Type",
    eventName: "Some Event Name"
};

export default Card;