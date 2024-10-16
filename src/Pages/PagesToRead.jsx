import { useLoaderData } from "react-router-dom";
import Barchart from "../Components/Barchart";

const PagesToRead = () => {
  const books = useLoaderData();
  return (
    <div>
      <Barchart books={books} />
    </div>
  );
};

export default PagesToRead;
