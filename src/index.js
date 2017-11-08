import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


jQuery(document).ready(function() {

    jQuery("#root").click(function() {
        var menu = jQuery("#top-menu-dropdown");
        if(menu.css("display") != "none") {
            menu.toggle();
        }
    });

    ReactDOM.render(<App />, document.getElementById('root'));
});

// registerServiceWorker();
