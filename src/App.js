import React from "react";

import BooksContextProvider from "./contexts/BookContext";
import Navbar from "./contexts/components/Navbar";
import Booklist from "./contexts/components/Booklist";
import NewBookform from "./contexts/components/NewBookform";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <Navbar />
        <Booklist />
        <NewBookform />
      </BooksContextProvider>
    </div>
  );
}

export default App;
