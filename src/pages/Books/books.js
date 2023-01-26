import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from '../../components/simple_book/Single_Book';
import AddBook from '../../components/add_a_book/Add_a_Book';
import { GetABook } from '../../redux/books/thunk';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetABook());
  }, []);
  return (
    <div>
      <ul className="books">
        {!books.length
          ? 'No books found'
          : books.map((book) => (
            <SingleBook
              id={book.item_id}
              key={book.item_id}
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
