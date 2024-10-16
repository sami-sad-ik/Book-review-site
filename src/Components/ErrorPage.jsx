import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-10/12 mx-auto text-center">
      <img src="/error-page.jpg" className="w-[546px] m-auto" />
      <p className="text-lg font-medium mb-7">Error: Page not Found </p>
      <Link
        onClick={() => navigate(-1)}
        className="bg-[#23BE0A] rounded-3xl md:px-3 p-2  text-white font-semibold
         hover:bg-[#3ea32f] duration-200">
        Back to the Page
      </Link>
    </div>
  );
};

export default ErrorPage;
