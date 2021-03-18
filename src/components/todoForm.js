import React from 'react';

export default function TodoForm() {
  return (
    <div>
      <form>
        <input className="from-control w-100"/>
        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-primary">Add Todo</button>
        </div>
      </form>
    </div>
  );
}
