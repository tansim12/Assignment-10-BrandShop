import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

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

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
