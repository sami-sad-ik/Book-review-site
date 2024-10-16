import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="  ">
      <h2 className="text-3xl font-bold my-5">Books</h2>
      <div className="  grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-5">
        {books?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
