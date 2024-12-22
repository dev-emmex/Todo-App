import React from 'react';

function TodoControls({ searchTerm, setSearchTerm, filter, setFilter, setShowModal }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search todos"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter todos"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
      <button onClick={() => setShowModal(true)} className="add-todo">
        Add Todo
      </button>
    </div>
  );
}

export default TodoControls;