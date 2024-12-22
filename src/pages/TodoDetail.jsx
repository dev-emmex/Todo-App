import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../utils/db';

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todoData = await db.todos.get(parseInt(id));
        if (!todoData) {
          navigate('/404');
          return;
        }
        setTodo(todoData);
        setEditedTitle(todoData.title);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    };

    fetchTodo();
  }, [id, navigate]);

  const handleUpdate = async () => {
    try {
      const updatedTodo = { ...todo, title: editedTitle };
      await db.todos.update(todo.id, updatedTodo);
      setTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="todo-detail">
      <h1>Todo Details</h1>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            aria-label="Edit todo title"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="todo-info">
          <h2>{todo.title}</h2>
          <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button onClick={() => navigate('/')}>Back to List</button>
    </div>
  );
}

export default TodoDetail;