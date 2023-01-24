import RemoveBook from '../remove_a_book/Remove_a_Book';

const SingleBook = (book) => {
  const { title, author, id } = book;
  return (
    <div className="book">
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
      </div>
      <button type="button" onClick={() => RemoveBook(id)}>Remove Book</button>
    </div>
  );
};

export default SingleBook;
