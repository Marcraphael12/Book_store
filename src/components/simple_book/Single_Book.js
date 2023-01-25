import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const SingleBook = (book) => {
  const { title, author, id } = book;
  const dispatch = useDispatch();
  const RemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <li className="book">
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
      </div>
      <button type="button" onClick={RemoveBook}>Remove Book</button>
    </li>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, author: PropTypes.string })
    .isRequired,
};
