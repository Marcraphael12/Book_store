import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const RemoveBook = (id) => {
  const dispatch = useDispatch();

  const Remove = () => {
    dispatch(removeBook(id));
  };

  return Remove();
};

export default RemoveBook;
