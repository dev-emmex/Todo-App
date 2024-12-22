import { Link } from 'react-router-dom';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
        aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <Link to={`/todo/${todo.id}`} className="todo-link">
        <span className={todo.completed ? 'completed' : ''}>
          {todo.title}
        </span>
      </Link>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        aria-label={`Delete todo ${todo.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;