import { Link } from "react-router-dom";

const SavedWishlistedBooks = ({ book }) => {
  const {
    bookName,
    author,
    image,
    publisher,
    yearOfPublishing,
    totalPages,
    rating,
    category,
    tags,
    id,
  } = book;

  return (
    <div className="lg:w-10/12 mx-auto my-5 flex lg:flex-row flex-col justify-between items-center gap-5  p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <div className=" lg:max-w-[15%]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-40 object-center rounded-md  "
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl text-black font-bold  ">{bookName}</h3>
        <p>by : {author}</p>
        <div className="mb-2">
          <p className="flex justify-start items-center gap-3 py-2  ">
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
          <p className="text-left">Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex gap-5 py-3 justify-start items-center border-b-2 border-[#13131326]">
          <p className="text-left">Publisher: {publisher}</p>
          <p className="">Pages: {totalPages}</p>
        </div>
        <div className="flex gap-1 mt-5">
          <span className="bg-[#328EFF26] rounded-full  p-2 text-[#328EFF] font-semibold  ">
            Category: {category}
          </span>
          <span className="bg-[#bebe0a62] rounded-full  p-2 text-[#be790a] font-semibold  ">
            Rating: {rating}
          </span>
          <Link
            to={`/book/a/${id}`}
            className="bg-[#23BE0A] rounded-full  p-2 text-white font-semibold hover:bg-[#3ea32f] duration-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedWishlistedBooks;
