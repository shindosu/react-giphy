// import two dependencies
import React, { Component } from 'react'; // need to write jsx
import ReactDOM from 'react-dom'; // used at very last line
import App from './components/app.jsx'
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root'); // get div id
if (root) {
  ReactDOM.render(<App />, root);
}
