import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";

const NewBookform = () => {
  const { addBook } = useContext(BookContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleSumbit = (e) => {
    addBook(title, author);
    setAuthor("");
    setTitle("");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="#">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title Name"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default NewBookform;
