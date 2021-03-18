import Todo from './components/todo';
import TodoForm from './components/todoForm';

function App() {
  return (
    <div className="d-flex justify-content-center p-2">
      <div className="d-flex flex-column w-25 mt-5">
        <TodoForm />
        <Todo />
      </div>
    </div>
  );
}

export default App;
