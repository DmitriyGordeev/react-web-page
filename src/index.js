import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';


const initState = "Init State Text";

function reducer(state = initState, action) {
    if(action.type === "SELECT_FILTER") {
        return initState + action.text;
    }

    return state;
}

jQuery(document).ready(function() {

    const store = createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'));


    // click on the blank space makes the top-menu to disappear:
    jQuery("#root").click(function() {
        var menu = jQuery("#top-menu-dropdown");
        if(menu.css("display") != "none") {
            menu.toggle();
        }
    });
});

// registerServiceWorker();
