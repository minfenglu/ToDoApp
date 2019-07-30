var React = require('react');
var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       todos: [
        {
          id:uuid(),
          text: 'walk the dog'
        },
        {
          id:uuid(),
          text: 'walk the cat'
        },
        {
          id:uuid(),
          text: 'walk the monkey'
        }
      ]
    }
  }
  handleAddTodo(text) {
    var {todos} = this.state;
    this.setState({
      todos: [...todos, {id:uuid(), text: text}]
    })
    console.log(this.state.todos);
  }
  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
      </div>
    )
  }
};

module.exports = TodoApp;
