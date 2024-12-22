import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import Layout from './components/Layout';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import ErrorTest from './pages/ErrorTest';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoList />} />
            <Route path="todo/:id" element={<TodoDetail />} />
            <Route path="error-test" element={<ErrorTest />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;