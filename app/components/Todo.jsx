var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.renderDate = this.renderDate.bind(this);
  }
  renderDate() {
    var {completed, completedAt, createdAt} = this.props;
    var timestamp;
    if (completed) {
      timestamp = 'Completed at ' + moment.unix(completedAt).format('MMM Do YYYY @ h:mm a');
    }
    else{
      timestamp = 'Created at ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');
    }
    return timestamp;
  }
  render() {
    var {text, id, completed, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    return (
      <div className={todoClassName} onClick={() => dispatch(actions.toggleTodo(id))}>
        <div>
        <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{this.renderDate()}</p>
        </div>
       </div>
    )
  }
}

export default connect()(Todo);
