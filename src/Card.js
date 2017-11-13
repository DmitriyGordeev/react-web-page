import React, { Component } from 'react';
import './Card.css'

const months = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября",
    "октября", "ноября", "декабря"
];

class CardText extends React.Component {

    eventPeriod(startDate, endDate) {
        var start_date = new Date(startDate);
        var start_formated = start_date.getDate() + " " + months[start_date.getMonth()] + " " + start_date.getFullYear();

        var end_date = new Date(endDate);
        var end_formated = end_date.getDate() + " " + months[end_date.getMonth()] + " " + end_date.getFullYear();

        return start_formated + " - " + end_formated;
    }

    render() {
        return (
            <div className={"card-text"}>
                <p className={"activity-type"}>{ this.props.activity }</p>
                <p className={"event-name"}>{ this.props.eventName }</p>
                <p className={"event-location"}>
                    <i className={"material-icons"} >{"location_on"}</i>
                    { this.props.eventLocation }
                    <br />
                    <span>{ this.eventPeriod(this.props.eventStartDate, this.props.eventEndDate)}</span>
                </p>
            </div>
        );
    }
}

CardText.defaultProps = {
    activity: "Activity Type",
    eventName: "Event Name",
    eventLocation: "Event Location",
    eventStartDate: "",
    eventEndDate: ""
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
                        eventLocation={this.props.eventLocation}
                        eventStartDate={this.props.eventStartDate}
                        eventEndDate={this.props.eventEndDate}
                        />

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