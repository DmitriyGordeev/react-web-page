import React, { Component } from 'react';
import jQuery from 'jquery';

import './App.css';
import Grid from "./Grid";

class App extends React.Component {

    onClickHandler() {
        jQuery("#top-menu-dropdown").toggle();
    }

    render() {
        return (
            <div>
                <header>
                    <div className={"action-bar"}>
                        <div className={"dropdown-menu"} onClick={this.onClickHandler}>
                            <p>Тип события</p>
                            <ul id={"top-menu-dropdown"}>
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
