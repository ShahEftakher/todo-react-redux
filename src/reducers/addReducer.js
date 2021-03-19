import { ADD_TODO } from '../constants';

const getTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    return todos;
  }
  return [];
};

const initialState = {
  todos: getTodos(),
};

export const addReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return {
      todos: state.todos.concat(action.payload),
    };
  }
  return state;
};
