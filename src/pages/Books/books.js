import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from '../../components/simple_book/Single_Book';
import AddBook from '../../components/add_a_book/Add_a_Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul className="books">
        {!books.length
          ? 'No books found'
          : books.map((book) => (
            <SingleBook
              id={book.id}
              key={book.id}
              title={book.title}
              author={book.author}
              book={book}
            />
          ))}
      </ul>
      <AddBook />

    </div>
  );
};

export default Books;
