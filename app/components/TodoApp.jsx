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
        <h1 className="page-title">Todo App</h1>
        <div className="grid-x">
          <div className="cell align-center small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = TodoApp;
