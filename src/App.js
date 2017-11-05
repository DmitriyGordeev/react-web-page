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

class Board extends React.Component {

    constructor(property) {
        super(property);
        this.state = { value: null };
    }

    static renderUI(label, placeholder) {
        return(
            <label>{label}
                <input placeholder={placeholder}/>
            </label>
        );
    }

    render() {
        return (
            <div className="block">
                <p className="header" onClick={() => this.setState({value: 'X'})}>{this.state.value}</p>
                <p className="description">Hello I am Description!</p>
                {Board.renderUI("Привет, напиши здесь имя", "ИМЯ")}
                {Board.renderUI("Напиши тут email", "МЫЛО!")}
            </div>
        );
    }

}


export default Board;
