import React, { Component } from 'react';
import './App.css';
import Card from "./Card";


class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Card eventName={"Teens Day"}/>
        );
    }

}


export default App;
