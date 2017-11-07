import React, { Component } from 'react';
import './Card.css'

class CardText extends React.Component {

    render() {
        return (
            <div className={"card-text"}>
                <p className={"activity-type"}>{ this.props.activity }</p>
                <p className={"event-name"}>{ this.props.eventName }</p>
                <p className={"event-location"}>{ this.props.eventLocation }</p>
            </div>
        );
    }
}

CardText.defaultProps = {
    activity: "Activity Type",
    eventName: "Event Name",
    eventLocation: "Event Location"
};


class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            acitivityType: "Activity Type [Card.state]",
            eventName: "Event Name [Card.state]",
            eventLocation: "Event Location [Card.state]"
        }
    }

    render() {
        return (
            <div className={"card-box"}>
                <CardText
                    activity={this.state.acitivityType}
                    eventName={this.state.eventName}
                    eventLocation={this.state.eventLocation} />

                <img src={ this.props.imageSrc }/>
            </div>
        );
    }
}



export default Card;