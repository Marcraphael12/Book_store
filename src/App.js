import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

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
