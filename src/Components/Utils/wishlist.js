import toast from "react-hot-toast";
import { getStoredBooks } from "./read";

const getStoredWishlist = () => {
  const storedBooks = localStorage.getItem("wishlist-key");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

//save Wishlist
const saveToWishlist = (book) => {
  const storedWishlistBooks = getStoredWishlist();
  const storedReadBooks = getStoredBooks();
  const isRead = storedReadBooks.find((b) => b.id === book.id);
  if (isRead) {
    return toast.error("The Book Already Read!");
  }
  const isWishlist = storedWishlistBooks.find((b) => b.id === book.id);
  if (isWishlist) {
    return toast.error("Already Added To Wishlist!");
  }
  storedWishlistBooks.push(book);
  localStorage.setItem("wishlist-key", JSON.stringify(storedWishlistBooks));
  toast.success("Successfully Added to Wishlist");
};
export { getStoredWishlist, saveToWishlist };
