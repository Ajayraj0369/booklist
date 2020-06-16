import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { books } = useContext(BookContext);
  console.log(books);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          console.log(book);
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> You dont have any books to read, free time</div>
  );
};

export default Booklist;
