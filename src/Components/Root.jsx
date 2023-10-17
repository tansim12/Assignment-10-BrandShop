import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Root = () => {
    const loc = useLocation()
  return (
    <div>
      <div>
        {
          loc.pathname !== "/" &&  <Navbar></Navbar>
        }
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
