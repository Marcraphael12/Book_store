import { useSelector } from 'react-redux';
import SingleBook from '../../components/simple_book/Single_Book';
import AddBook from '../../components/add_a_book/Add_a_Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <SingleBook key={book.id} book={books} />
        ))}
      </ul>
      <AddBook />

    </div>
  );
};

export default Books;
