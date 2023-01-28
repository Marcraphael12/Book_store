import './add-book.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/thunk';

const AddBook = () => {
  const [newInput, setInput] = useState({
    item_id: '', title: '', author: '', category: '',
  });
  const dispatch = useDispatch();

  // state handlers
  const userInput = (e) => {
    setInput({ ...newInput, item_id: uuidv4(), [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(addBook(newInput));
    // reset input
    setInput({ item_id: '', title: '', author: '' });
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

      <select value={newInput.category} onChange={userInput} name="category">
        <option value="">Please select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBook;
