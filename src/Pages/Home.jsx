import { Link, useLoaderData } from "react-router-dom";
import Books from "../Components/Books";

const Home = () => {
  const books = useLoaderData();

  return (
    <div className="text-center md:w-10/12 mx-auto">
      <div className=" p-5 rounded-2xl space-y-6 bg-[#1313130D] my-16 md:flex justify-center items-center ">
        <div className="md:ml-24 md:text-left">
          <h2 className="md:text-5xl  text-3xl font-bold md:mb-10 mb-5">
            Books to freshen <br /> up your bookshelf
          </h2>
          <Link
            to="/Listed-books"
            className="bg-[#23BE0A] rounded md:p-3 p-2 text-white font-semibold hover:bg-[#3ea32f] duration-200">
            View The List
          </Link>
        </div>
        <img
          src="/book3.jpg "
          alt=""
          className="md:w-60 md:h-96 w-60 h-48   object-cover  mx-auto  rounded-lg"
        />
      </div>
      <div className="">
        <Books books={books} />
      </div>
    </div>
  );
};

export default Home;
