const AddBookForm = () => {
  <form>
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Author" />
    <label htmlFor="Category">
      Category
      <select name="Category" id="Category">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
    </label>

    <button type="submit">Add Book</button>
  </form>;
};

export default AddBookForm;
