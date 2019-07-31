var React = require('react');

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  }
  render() {
    return (
      <div>
        <input ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>

    )
  }
}

module.exports = TodoSearch;
