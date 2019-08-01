var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');

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
        <Todo key={todo.id} {...todo}/>
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
