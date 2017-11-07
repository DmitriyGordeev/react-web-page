import React, { Component } from 'react';
import './App.css';

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
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    setStateHandler() {
        var v = this.state.value;
        this.setState({ value: v + 1 });
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="block">
                <button onClick = { this.forceUpdateHandler }>SET STATE</button>
                <Square class={ "box" } value={
                    Math.random()
                }/>
            </div>
        );
    }

}


export default App;
