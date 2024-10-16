import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import ErrorPage from "../Components/ErrorPage";
import BookDetails from "../Components/BookDetails";
import ReadBooks from "../Components/ReadBooks";
import WishlistedBooks from "../Components/WishlistedBooks";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/books.json"),
        element: <Home />,
      },
      {
        path: "book/a/:id",
        loader: async ({ params }) => {
          const res = await fetch("/books.json");
          const books = await res.json();
          const book = books.find((b) => String(b.id) === params.id);
          return book;
        },
        element: <BookDetails />,
      },
      {
        path: "/Listed-books",
        element: <ListedBooks />,
        children: [
          {
            path: "",
            element: <ReadBooks />,
          },
          {
            path: "wishlisted-books",
            element: <WishlistedBooks />,
          },
        ],
      },
      {
        path: "/Pages-to-Read",
        loader: () => fetch("/books.json"),
        element: <PagesToRead />,
      },
    ],
  },
]);

export default Routes;
