import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>The Reading books</h1>
      <p>You have {books.length} books in your reading list</p>
    </div>
  );
};

export default Navbar;
