import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // console.log(books);

  return (
    <div className="">
      <div className=" flex items-center lg:mx-32  overflow-x-auto overflow-y-hidden  flex-nowrap">
        <Link
          onClick={() => setTabIndex(0)}
          to=""
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg  border-gray-600 text-gray-600 
            ${tabIndex === 0 ? "border border-b-0" : "border-b"}`}>
          <span>Read</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to="wishlisted-books"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-gray-600 text-gray-900  
            ${tabIndex === 1 ? "border border-b-0" : "border-b"}`}>
          <span>Wishlist</span>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
