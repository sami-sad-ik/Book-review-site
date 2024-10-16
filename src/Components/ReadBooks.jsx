import { useEffect, useState } from "react";
import { getStoredBooks } from "./Utils/read";
import SavedBook from "./SavedBook";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getStoredBooks());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <SavedBook key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ReadBooks;
