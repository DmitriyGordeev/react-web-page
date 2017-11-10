import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';



function reducer(state = [], action) {

    if(action.type === "SELECT_FILTER") {
        return [
            ...state,
            action.filterItem
        ]
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
