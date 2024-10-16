import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="space-y-10 ">
      <div className="h-14 mb-5">
        <Nav />
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
