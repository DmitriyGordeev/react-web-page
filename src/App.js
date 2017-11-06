import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


function S(props) {
    return (
        <div className="square ">{ props.value }</div>
    );
}

class Square extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ "square " + this.props.class }>{this.props.value}</div>
        );
    }
}

class Board extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="block">
                <S value={123}/>
                <Square class={"box"} value={190}/>
            </div>
        );
    }

}


export default Board;
