import { useState } from 'react';
import { db } from '../utils/db';

function TodoModal({ onClose }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.todos.add({
        title,
        completed: false,
        userId: 1
      });
      onClose();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-labelledby="modal-title">
        <h2 id="modal-title">Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            aria-label="Todo title"
            required
          />
          <div className="modal-actions">
            <button type="submit">Add Todo</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;