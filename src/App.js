import React, { Component } from 'react';

import './App.css';
import Grid from "./Grid";
import ActionBar from "./ActionBar";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <ActionBar />
                </header>
                <Grid />
            </div>
        );
    }

}

export default App;
