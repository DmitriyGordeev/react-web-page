import React, { Component } from 'react';
import './App.css';
import Card from "./Card";
import Grid from "./Grid";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className={"action-bar"}>
                        <div className={"dropdown-menu"}>
                            <p>Тип события</p>
                            <ul></ul>
                        </div>
                    </div>
                </header>
                <Grid />
            </div>
        );
    }

}


export default App;
