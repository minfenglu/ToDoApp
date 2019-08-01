var React = require('react');
var moment = require('moment');

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderDate = this.renderDate.bind(this);
  }
  handleClick() {
    var {id} = this.props;
    this.props.onToggle(id);
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
    var {text, id, completed} = this.props;
    return (
      <div className="todo" onClick={this.handleClick}>
          <input type="checkbox" checked={completed}/>
          {text}
          {this.renderDate()}
      </div>
    )
  }
}

module.exports = Todo;
