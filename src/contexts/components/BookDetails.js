import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const BookDetails = ({ book }) => {
  const { removebooks } = useContext(BookContext);
  console.log(book);
  return (
    <li onClick={() => removebooks(book.id)}>
      <li className="title">{book.title}</li>
      <li className="author">{book.author}</li>
    </li>
  );
};

export default BookDetails;
