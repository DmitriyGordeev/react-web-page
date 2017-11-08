import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import './index.css';
import App from './App';
import {menuHover} from './menu';
// import registerServiceWorker from './registerServiceWorker';


jQuery(document).ready(function() {
    ReactDOM.render(<App />, document.getElementById('root'));
    menuHover();
});

// registerServiceWorker();
