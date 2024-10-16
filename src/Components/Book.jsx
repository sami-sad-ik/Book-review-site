import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const errorImage = "/error-img.jpg";

  const { bookName, author, image, rating, category, tags, id } = book;
  return (
    <Link to={`/book/a/${id}`}>
      <div className="space-y-7 p-6 rounded-md shadow-md hover:border hover:border-black hover:scale-[1.01] dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt={errorImage}
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <div className="flex justify-center gap-2 my-3 items-center">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="block text-xs font-medium tracking-widest uppercase
               dark:text-[#23BE0A] bg-[#23BE0A0D] p-1 rounded-xl">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-left text-xl font-semibold tracking-wide">
            {bookName}
          </h2>
        </div>
        <div className="border-b-2 text-[#131313c7] font-medium border-dashed border-slate-300">
          <p className="text-left  pb-2">By: {author}</p>
        </div>
        <div
          className="flex text-[#131313c7] font-medium  justify-between 
        items-center">
          <h2>{category}</h2>
          <p className="flex justify-center gap-1 items-center">
            {rating} <CiStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
