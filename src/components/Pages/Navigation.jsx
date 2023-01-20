import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
