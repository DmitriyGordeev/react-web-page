import React, { Component } from 'react';
import './App.css';
import Rectangle from "./Rectangle";

class Square extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ "square " + this.props.class }>{this.props.value}</div>
        );
    }
}

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            value: 1239002,
            yell:  "YELL!"
        }
    }

    render() {
        return (
            <div className="block">
                <Square class={ "box" } value={ this.state.value }/>
                <Rectangle yell={ this.state.yell }/>
            </div>
        );
    }

}


export default App;
