import { useLoaderData } from "react-router-dom";
import { saveBooks } from "./Utils/read";
import { saveToWishlist } from "./Utils/wishlist";

const BookDetails = () => {
  const errorImage = "/error-img.jpg";
  const book = useLoaderData();
  // console.log(book);
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  const handleRead = (b) => {
    saveBooks(b);
  };
  const handleWishlist = (b) => {
    saveToWishlist(b);
  };
  return (
    <section>
      <div
        className="  flex  lg:flex-row flex-col justify-center items-center  gap-3
           mx-auto   ">
        <div className="">
          <img
            src={image}
            alt={errorImage}
            className="object-cover
             w-full h-auto rounded sm:h-96  "
          />
        </div>
        <div className="lg:w-1/2 lg:p-6 p-2 text-left space-y-2 text-[#131313B3] font-medium ">
          <h3 className="text-2xl text-black font-semibold sm:text-4xl ">
            {bookName}
          </h3>
          <p>by : {author}</p>
          <p className="border-y-2 border-[#13131326] py-2">{category}</p>
          <p>
            <span className="text-black text-lg font-bold">Review:</span>{" "}
            {review}
          </p>
          <p className="flex justify-start items-center gap-3 py-2 border-b-2 border-[#13131326] ">
            <span className="text-lg font-semibold">Tag </span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="block text-xs font-medium tracking-widest uppercase
               dark:text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-xl">
                #{tag}
              </span>
            ))}
          </p>
          <div className="w-3/5">
            <article className="flex justify-between items-center ">
              <p className="text-left">Number of Pages:</p>
              <p className="text-center font-bold">{totalPages}</p>
            </article>
            <article className=" flex justify-between items-center gap-4 ">
              <p className="text-left">Publisher:</p>
              <p className="text-right font-bold">{publisher}</p>
            </article>
            <article className=" flex justify-between items-center">
              <p className="text-left">Year of Publishing:</p>
              <p className="text-right font-bold">{yearOfPublishing}</p>
            </article>
            <article className=" flex justify-between items-center">
              <p className="text-left">Rating:</p>
              <p className="text-right font-bold">{rating}</p>
            </article>
          </div>
          <div className="flex items-center  gap-5">
            <button
              onClick={() => {
                handleRead(book);
              }}
              className="btn w-15">
              Read
            </button>
            <button
              onClick={() => {
                handleWishlist(book);
              }}
              className="btn btn-accent">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
