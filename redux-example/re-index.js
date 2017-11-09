import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';

const initialState = [
    'Smells like spirit',
    'Enter Sandman'
];

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}


jQuery(document).ready(function() {

    const store = createStore(playlist);

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

/* // Redux stuff: ---------------------------------------------------------------------
import { createStore } from 'redux';

function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
});


addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
});*/
