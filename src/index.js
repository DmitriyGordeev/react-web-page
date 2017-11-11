import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';


function reducer(state = [], action) {

    if(action.type === "SELECT_FILTER") {

        var index = state.indexOf(action.filterItem);
        console.log("add filter index = ", index);

        if(index >= 0) {
            return state;
        }
        else {
            return [
                ...state,
                action.filterItem
            ]
        }
    }
    else if(action.type === 'CLOSE_FILTER') {
        var newstate = state.slice();
        var index = newstate.indexOf(action.filterName);

        newstate.splice(index, 1);
        return newstate;
    }
    else if(action.type === 'CLEAR_FILTER') {
        return [];
    }

    return state;
}

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


var root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root);


function onRootClick() {

    var menu = document.getElementById("top-menu-dropdown");
    if(menu.style.display != "none") {
        menu.style.display = "none";
    }
}
root.addEventListener("click", onRootClick);
