import React, { Component } from 'react';
import './Grid.css'
import Card from "./Card";

class GridRow extends React.Component {

    render() {
        return(
            <section className="grid-row">
                <Card imageSrc={"Tesla-Model-S-full-HD.jpg"}/>
                <Card imageSrc={"Tesla-Model-S-full-HD.jpg"}/>
                <Card imageSrc={"Tesla-Model-S-full-HD.jpg"}/>
            </section>
        );
    }

}

class Grid extends React.Component {

    render() {
        return (
            <GridRow/>
        );
    }


}

export default Grid;