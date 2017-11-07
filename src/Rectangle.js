import React, { Component } from 'react';
import './Rectangle.css';

class Rectangle extends React.Component {

    render() {
        return (
            <div className="rectangle">{ this.props.yell }</div>
        );
    }
}

Rectangle.defaultProps = { yell: "Yep!" };

export default Rectangle;