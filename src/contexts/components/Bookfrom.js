import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";

const Bookform = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form onSubmit={addBook(title, author)}>
      <label>Book Title</label>
      <input
        type="text"
        value={title}
        placeholder="add title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author Name</label>
      <input
        type="text"
        value={author}
        placeholder="add title"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default Bookform;
