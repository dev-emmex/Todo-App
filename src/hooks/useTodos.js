import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../utils/db';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const localTodos = useLiveQuery(() => db.todos.toArray());

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        if (!localTodos || localTodos.length === 0) {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await response.json();
          
          // Add todos in batches to avoid overwhelming the browser
          const batchSize = 50;
          for (let i = 0; i < data.length; i += batchSize) {
            const batch = data.slice(i, i + batchSize);
            await db.todos.bulkPut(batch);
          }
          
          setTodos(data);
        } else {
          setTodos(localTodos);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [localTodos]);

  const deleteTodo = async (id) => {
    try {
      await db.todos.delete(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = await db.todos.get(id);
      if (todo) {
        const updated = { ...todo, completed: !todo.completed };
        await db.todos.put(updated);
        setTodos(prevTodos =>
          prevTodos.map(t => t.id === id ? updated : t)
        );
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return { todos, loading, deleteTodo, toggleTodo };
}