var React = require('react');
var Todo = require('Todo');
class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    console.log("render todos");
    var {todos} = this.props;
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      )
    })
  }
  render() {
    return (
      <div>
          {this.renderTodos()}
      </div>
    )
  }
};

module.exports = TodoList;
