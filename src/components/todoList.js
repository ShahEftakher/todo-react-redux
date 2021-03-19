import { connect } from 'react-redux';
import Todo from './todo';
import TodoForm from './todoForm';

function TodoList({ todos }) {
  console.log(todos);
  return (
    <div className="d-flex justify-content-center p-2">
      <div className="d-flex flex-column w-25 mt-5">
        <TodoForm />
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.text + Math.ceil(Math.random() * 100).toString()}
              text={todo.text}
              isComplete={todo.isComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapPropsTostate = (state) => {
  return {
    todos: state.addReducer.todos,
  };
};

export default connect(mapPropsTostate)(TodoList);
