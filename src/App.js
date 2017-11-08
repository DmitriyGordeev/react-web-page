import React, { Component } from 'react';

import './App.css';
import Card from "./Card";
import Grid from "./Grid";

class App extends React.Component {

    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        var menu = document.getElementById("top-dropdown");
        menu.style.display = "block";
    }

    render() {
        return (
            <div>
                <header>
                    <div className={"action-bar"}>
                        <div className={"dropdown-menu"} onClick={this.onClickHandler}>
                            <p>Тип события</p>
                            <ul id={"top-dropdown"}>
                                <li>Item1</li>
                                <li>Item2</li>
                                <li>Item3</li>
                                <li>Item4</li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Grid />
            </div>
        );
    }

}


export default App;
