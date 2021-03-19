export const addToStorage = ({ getState, dispatch }) => (next) => (action) => {
  localStorage.setItem(
    'todos',
    JSON.stringify(getState().addReducer.todos.concat(action.payload))
  );
  next(action);
};
