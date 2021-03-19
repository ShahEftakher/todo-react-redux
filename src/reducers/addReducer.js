import { ADD_TODO } from '../constants';
import { getTodos } from '../util/getTodo';

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
