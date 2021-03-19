import { DELETE_TODO } from '../constants/index';

export default function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
}
