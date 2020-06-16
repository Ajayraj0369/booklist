import React, { createContext, useState } from "react";
// import v5 from "uuid/v1";

export const BookContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setbooks] = useState([
    {
      title: "The three mistakes of my life",
      author: "Chethan Bhagath",
      id: 1,
    },
    { title: "The Angles & Demons", author: "Dan Brown", id: 2 },
  ]);

  const addBook = (title, author) => {
    setbooks([...books, { title, author, id: Date.now() }]);
  };

  const removebooks = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removebooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BooksContextProvider;
