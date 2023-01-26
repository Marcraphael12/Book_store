import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { AddABook } from '../../redux/books/thunk';

const AddBook = () => {
  const [newInput, setInput] = useState({ id: '', title: '', author: '' });
  const dispatch = useDispatch();

  // state handlers
  const userInput = (e) => {
    setInput({ ...newInput, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(AddABook(newInput));
    // reset input
    setInput({ id: '', title: '', author: '' });
  };

  return (
    <form onSubmit={Submit}>
      <input
        name="title"
        type="text"
        value={newInput.title}
        placeholder="Book title"
        onChange={userInput}
      />

      <input
        type="text"
        name="author"
        value={newInput.author}
        placeholder="Book's author"
        onChange={userInput}
      />
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
