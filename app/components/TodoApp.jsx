var React = require('react');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';

var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       todos: TodoAPI.getTodos(),
       showCompleted: false,
       searchText: ''
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos: updatedTodos})
  }
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    //<TodoSearch onSearch={(showCompleted, searchText) => this.handleSearch(showCompleted, searchText)}/>
    //<TodoList todos={filteredTodos} onToggle={(id) => this.handleToggle(id)}/>
    //<AddTodo/>
    return (
      <div>
        <TodoSearch onSearch={(showCompleted, searchText) => this.handleSearch(showCompleted, searchText)}/>
        <TodoList todos={filteredTodos} onToggle={(id) => this.handleToggle(id)}/>
        <AddTodo/>
      </div>
    )
  }
};

module.exports = TodoApp;
