import { ADD_TODO, DELETE_TODO,DONE_TODO } from "../actions/todo";

const initialState = {
  toDoList: JSON.parse(localStorage.getItem('toDoList')) || []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { description } = action.payload;
      const { toDoList } = state;
      toDoList.push({
        id: new Date().getTime(),
        description,
        done: false,
      });
      localStorage.setItem('toDoList', JSON.stringify(toDoList))
      return {
        ...state,
        toDoList: [...toDoList],
      }
    }
    case DELETE_TODO: {
     
      const { id } = action.payload;
      const toDoList = state.toDoList.filter(l => l.id !== id );
      localStorage.setItem('toDoList', JSON.stringify(toDoList))
      
      return {
        ...state,
        toDoList: [...toDoList]
      }
    } case DONE_TODO: {
      const { id } = action.payload;
      const todo = state.toDoList.findIndex(l => l.id == id);

      state.toDoList[todo].done = !state.toDoList[todo].done

      localStorage.setItem('toDoList', JSON.stringify(state.toDoList))
      return {
        ...state,
        toDoList: [...state.toDoList]
      }
    }

   
    default: {
      return state
    }
  }
}
