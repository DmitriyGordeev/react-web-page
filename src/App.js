import React, { Component } from 'react';
import './App.css';
import Card from "./Card";


class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Card activity={"Семинары, воркшопы и тренинги"}
                  eventName={"Teens Day"}
                  eventLocation={"Музей современного искусства \"Гараж\""}
                  imageSrc={"Tesla-Model-S-full-HD.jpg"} />
        );
    }

}


export default App;
