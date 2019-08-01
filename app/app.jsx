var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var $ = require('jquery');

// Load foundation
$(document).foundation;

// App css
require('applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);

require('./redux-example.jsx');
