import toast from "react-hot-toast";

const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("bookKey");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

//save books
const saveBooks = (book) => {
  const storedBooks = getStoredBooks();
  const isExists = storedBooks.find((b) => b.id === book.id);
  if (isExists) {
    return toast.error("Already Added to Read!");
  }
  storedBooks.push(book);
  localStorage.setItem("bookKey", JSON.stringify(storedBooks));
  toast.success("Successfully Marked as Read");
};
//delete books

export { saveBooks, getStoredBooks };
