import { ADD_TODO } from '../constants/index';

export default function addTodo(todo) {
  const payload = {
    text: todo,
    isComplete: false,
  };
  return {
    type: ADD_TODO,
    payload,
  };
}
