import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Todos</Link></li>
        <li><Link to="/error-test">Test Error</Link></li>
        <li><Link to="/404">404 Page</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;