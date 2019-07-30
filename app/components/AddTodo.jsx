var React = require('react');

class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    if (text.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

module.exports = AddTodo;
