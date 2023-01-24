import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Books from './pages/Books/books';
import Categories from './pages/categories/categories';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
