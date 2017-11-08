import React, { Component } from 'react';
import './App.css';
import Grid from "./Grid";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className={"action-bar"}>
                        <div className={"dropdown-menu"}>
                            <p>Тип события</p>
                            <ul>
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
