import { useState} from 'react';
import TodoControls from '../components/TodoControls';
import TodoItem from '../components/TodoItem';
import Pagination from '../components/Pagination';
import TodoModal from '../components/TodoModal';
import EmptyState from '../components/EmptyState';
import { useTodos } from '../hooks/useTodos';

function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 10;

  const { todos, loading, deleteTodo, toggleTodo } = useTodos();

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' ? true : 
                         filter === 'completed' ? todo.completed :
                         !todo.completed;
    return matchesSearch && matchesFilter;
  });

  const paginatedTodos = filteredTodos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="todo-list">
      <TodoControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        setShowModal={setShowModal}
      />

      {filteredTodos.length === 0 ? (
        <EmptyState searchTerm={searchTerm} />
      ) : (
        <>
          <ul className="todo-items" role="list">
            {paginatedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
              />
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {showModal && (
        <TodoModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default TodoList;