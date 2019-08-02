var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {dispatch, showCompleted, searchText} = this.props;
    console.log("showCompleted? ", showCompleted);
    return (
      <div>
        <input ref="searchText" placeholder="Search todos" onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>

    )
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
