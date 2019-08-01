var redux = require('redux');
var {changeName, addMovie, delMovie, fetchLocation} = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('starting redux example');

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('get new state: ', state);
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});

store.dispatch(changeName('Minfeng'));
store.dispatch(addMovie('Start Wars', 'Action'));
store.dispatch(addMovie('Avengers', 'Action'));
store.dispatch(delMovie(1));
store.dispatch(fetchLocation());
