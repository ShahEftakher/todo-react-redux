import React from 'react';

export default function Todo() {
  return (
    <div className="border shadow p-3 mt-3">
      <p>To this</p>
      <div className="d-flex justify-content-end p-3">
        <button className="btn btn-primary me-2">Complete</button>
        <button className="btn btn-success me-2">Edit</button>
        <button className="btn btn-danger">Remove</button>
      </div>
    </div>
  );
}
