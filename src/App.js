import React, { Component } from 'react';
import './App.css';
import Card from "./Card";
import Grid from "./Grid";


class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            /*<Card activity={"Семинары, воркшопы и тренинги"}
                  eventName={"Teens Day"}
                  eventLocation={"Музей современного искусства \"Гараж\""}
                  imageSrc={"Tesla-Model-S-full-HD.jpg"} />*/

            <Grid />
        );
    }

}


export default App;
