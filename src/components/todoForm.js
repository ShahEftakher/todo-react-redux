import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      alert('Please add a todo!');
      return;
    }
    addTodo(todo);
    e.target.reset();
    setTodo('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="from-control w-100" onChange={handleChange} />
        <div className="d-flex justify-content-end mt-2">
          <button type="submit" className="btn btn-primary btn-sm">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
