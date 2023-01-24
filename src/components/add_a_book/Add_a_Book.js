import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  // state handlers
  const AddTitle = (e) => setTitle(e.target.value);
  const AddAuthor = (e) => setAuthor(e.target.value);
  const clearInputs = () => {
    setTitle('');
    setAuthor('');
  };

  const Submit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    // dispatch action
    dispatch(addBook(newBook));

    // reset input
    clearInputs();
  };

  return (
    <form onSubmit={Submit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={AddTitle}
      />

      <input
        type="text"
        placeholder="Book's author"
        value={author}
        onChange={AddAuthor}
      />
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
