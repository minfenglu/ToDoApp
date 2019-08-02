var React = require('react');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

class TodoApp extends React.Component{
  render() {
    return (
      <div>
        <TodoSearch/>
        <TodoList/>
        <AddTodo/>
      </div>
    )
  }
};

module.exports = TodoApp;
