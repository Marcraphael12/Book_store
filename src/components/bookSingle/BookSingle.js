/* eslint-disable camelcase */
import './book-single.scss';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/thunk';

const BookSingle = (book) => {
  const {
    book: { item_id, title, author },
  } = book;

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <li className="book">
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
      </div>
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </li>
  );
};

BookSingle.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
    .isRequired,
};

export default BookSingle;
