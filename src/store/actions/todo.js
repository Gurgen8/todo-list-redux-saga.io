export const ADD_TODO = 'ADD_TODO';

export function addTodo(description) {
  return {
    type: ADD_TODO,
    payload: {
      description
    }
  }
}

export const DELETE_TODO = 'DELETE_TODO';

export function removeTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}


export const DONE_TODO ="DONE_TODO"

export function doneTodo(id) {
  return {
    type:  DONE_TODO,
    payload: {
      id
    }
  }
}