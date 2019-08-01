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
      timestamp = moment.unix(completedAt).format('MMM Do YYYY @ h:mm a');
    }
    else{
      timestamp = moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');
    }
    return timestamp;
  }
  render() {
    var {text, id, completed, dispatch} = this.props;
    return (
      <div className="todo" onClick={() => dispatch(actions.toggleTodo(id))}>
          <input type="checkbox" checked={completed}/>
          {text}
          {this.renderDate()}
      </div>
    )
  }
}

export default connect()(Todo);
