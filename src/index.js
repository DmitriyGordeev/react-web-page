import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


jQuery(document).ready(function() {

    ReactDOM.render(<App />, document.getElementById('root'));

    // click on the blank space makes the top-menu to disappear:
    jQuery("#root").click(function() {
        var menu = jQuery("#top-menu-dropdown");
        if(menu.css("display") != "none") {
            menu.toggle();
        }
    });
});

// registerServiceWorker();
