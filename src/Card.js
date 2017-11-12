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
    }

    render() {

        return (
            <div className={"card-box-container"}>
                <div className={"card-box"}>
                    <CardText
                        activity={this.props.activity}
                        eventName={this.props.eventName}
                        eventLocation={this.props.eventLocation} />

                    <div className={"bottom-image-container"} style={
                        {
                            backgroundImage: "url('" + this.props.imageSrc + "')"
                        }
                    }></div>
                    {/*<img src={ this.props.imageSrc }/>*/}
                </div>
            </div>
        );
    }
}

export default Card;