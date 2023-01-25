import PropTypes from 'prop-types';

import useDispatch from 'react-redux';
import { removeBook } from '../../redux/books/books';

const SingleBook = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const RemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
      </div>
      <button type="button" onClick={RemoveBook(id)}>Remove Book</button>
    </div>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
