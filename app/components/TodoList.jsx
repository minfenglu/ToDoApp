var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    var {todos, showCompleted, searchText} = this.props;
    return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
