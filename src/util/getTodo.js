export const getTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    return todos;
  }
  return [];
};
