import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

const App = () => {
  <>
    <Header />
    <Routes>
      <Route path="/books" element={<Books />} />
    </Routes>
  </>;
};

export default App;
