import React, { Component } from 'react';
import './App.css';

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
            <div></div>
        );
    }

}


export default App;
