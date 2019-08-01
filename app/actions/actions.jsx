export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
