var React = require('react');
var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       todos: TodoAPI.getTodos()
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleAddTodo(text) {
    var {todos} = this.state;
    var newTodos = [...todos,
      { id: uuid(),
        text: text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];
    this.setState({
      todos: newTodos
    })
    TodoAPI.setTodos(newTodos);

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
  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch/>
        <TodoList todos={todos} onToggle={(id) => this.handleToggle(id)}/>
        <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
      </div>
    )
  }
};

module.exports = TodoApp;
