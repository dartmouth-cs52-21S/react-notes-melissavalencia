// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// let sec = 0;
// setInterval(() => { $('#main').html(`You have been on this page for ${sec} seconds.`); sec += 1; }, 1000);
