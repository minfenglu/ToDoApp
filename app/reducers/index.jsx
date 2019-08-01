export var nameReducer = (state='Unknown', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}


var nextMovieId = 1;
export var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          name: action.name,
          genre: action.genre
        }
      ]
    case 'DEL_MOVIE':
      return state.filter((movie) => movie.id != action.id);
    default:
      return state;
  }
}

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
      case 'START_LOCATION_FETCH':
        return {
          isFetching: true,
          url: undefined
        }
      case 'COMPLETE_LOCATION_FETCH':
        return {
          isFetching: false,
          url: action.url
        }
    default:
      return state

  }
}
