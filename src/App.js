import { Routes, Route } from 'react-router-dom';
import Books from './pages/books/BooksList';
import Categories from './pages/categories/CategoriesList';
import Header from './pages/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
