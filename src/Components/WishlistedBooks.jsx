import { useEffect, useState } from "react";
import { getStoredWishlist } from "./Utils/wishlist";
import SavedWishlistedBooks from "./savedWishlistedBooks";

const WishlistedBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(getStoredWishlist());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <SavedWishlistedBooks key={book.id} book={book} />
      ))}
    </div>
  );
};

export default WishlistedBooks;
