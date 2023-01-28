import './book-list.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/thunk';

import BookSingle from '../bookSingle/BookSingle';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul className="books">
      {!books.length
        ? 'No books found'
        : books.map((book) => (
          <BookSingle
            id={book.item_id}
            key={book.item_id}
            title={book.title}
            author={book.author}
            book={book}
          />
        ))}
    </ul>
  );
};

export default BookList;
