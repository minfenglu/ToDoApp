var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var $ = require('jquery');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
  console.log('End of printing New state');
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
console.log(initialTodos);

// Load foundation
$(document).foundation;

// App css
require('applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);


//require('./redux-example.jsx');
