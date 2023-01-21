import React from 'react';
import AddBookForm from './AddBook';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      Author: 'Suzanne Collins',
      Category: 'Action',
      id: 1,
    },
    {
      title: 'Dune',
      Author: 'Frank Herbert',
      Category: 'Science Fiction',
      id: 2,
    },
    {
      title: 'Capital in the Twenty First Century',
      Author: 'Thomas Piketty',
      Category: 'Economy',
      id: 3,
    },
  ];

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <div className="" key={book.id}>
            <li key={book.id}>{book.title}</li>
            <li>{book.Author}</li>
            <li>{book.completed ? 'Completed' : 'Not Completed'}</li>
            <button type="button">Remove</button>
          </div>
        ))}
      </ul>
      <AddBookForm />
    </div>
  );
};

export default Books;
