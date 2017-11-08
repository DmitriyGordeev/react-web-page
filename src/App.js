import React, { Component } from 'react';

import './App.css';
import Grid from "./Grid";
import ActionBar from "./ActionBar";

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
                    <ActionBar />
                </header>
                <div className={"filter-stroke"}>

                </div>
                <Grid />
            </div>
        );
    }

}

export default App;
